'use client';

import React, { useEffect, useState } from 'react';
import { readLives, getOrdersByLiveId } from '@/app/actions';
import { Live } from '@prisma/client';
import EmptyState from './EmptyState';
import { TrendingUp } from 'lucide-react';

interface ProfitTableProps {
  email: string;
}

interface ProfitData {
  date: string;
  profit: number;
  orderCount: number;
  totalRevenue: number;
  liveSessionCount: number;
}

const ProfitTable = ({ email }: ProfitTableProps) => {
  const [profitData, setProfitData] = useState<ProfitData[]>([]);
  const [startDate, setStartDate] = useState<string>(
    new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0]
  );
  const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!email) return;
        setLoading(true);

        const livesData = await readLives(email);
        if (!livesData) {
          setProfitData([]);
          return;
        }

        // Regrouper les données par date
        const dataByDate: { [date: string]: ProfitData } = {};

        for (const live of livesData) {
          const orders = await getOrdersByLiveId(live.id);
          const ordersArray = Object.values(orders).flat();
          const totalCollected = ordersArray.reduce(
            (sum: number, item: { price: number; isDeliveredAndPaid: boolean }) =>
              sum + (item.isDeliveredAndPaid ? item.price : 0),
            0
          );
          const orderCount = ordersArray.filter((item) => item.isDeliveredAndPaid).length;
          const profit = totalCollected - (live.purchasePrice ?? 0);
          const date = new Date(live.date).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });

          if (!dataByDate[date]) {
            dataByDate[date] = {
              date,
              profit: 0,
              orderCount: 0,
              totalRevenue: 0,
              liveSessionCount: 0,
            };
          }

          dataByDate[date].profit += profit;
          dataByDate[date].orderCount += orderCount;
          dataByDate[date].totalRevenue += totalCollected;
          dataByDate[date].liveSessionCount += 1;
        }

        // Convertir l'objet en tableau, filtrer les dates sans sessions live, et trier par date
        const profitData: ProfitData[] = Object.values(dataByDate)
          .filter((data) => data.liveSessionCount > 0)
          .sort((a, b) =>
            new Date(a.date.split('/').reverse().join('-')).getTime() -
            new Date(b.date.split('/').reverse().join('-')).getTime()
          );

        setProfitData(profitData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  const filteredData = profitData.filter((data) => {
    const dataDate = new Date(data.date.split('/').reverse().join('-'));
    return dataDate >= new Date(startDate) && dataDate <= new Date(endDate);
  });

  return (
    <div className="mt-6 bg-base-100 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-primary" />
        Profit par période
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="text-sm font-medium text-white mb-1 block">Date de début</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full bg-base-200 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary transition-all duration-200"
            max={endDate}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-white mb-1 block">Date de fin</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full bg-base-200 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary transition-all duration-200"
            min={startDate}
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center w-full py-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredData.length === 0 ? (
        <EmptyState
          message="Aucune session live pour cette période"
          IconComponent="TrendingUp"
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-primary/10 text-white">
                <th className="text-left py-3">Date</th>
                <th className="text-right py-3">Profit (Ar)</th>
                <th className="text-right py-3">Commandes</th>
                <th className="text-right py-3">Chiffre d'affaires (Ar)</th>
                <th className="text-right py-3">Sessions Live</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-base-200 transition-colors duration-200"
                >
                  <td className="py-3">{data.date}</td>
                  <td className="text-right py-3 font-semibold text-green-400">
                    {data.profit.toLocaleString('fr-FR')} Ar
                  </td>
                  <td className="text-right py-3 font-semibold text-yellow-400">
                    {data.orderCount.toLocaleString('fr-FR')}
                  </td>
                  <td className="text-right py-3 font-semibold text-blue-400">
                    {data.totalRevenue.toLocaleString('fr-FR')} Ar
                  </td>
                  <td className="text-right py-3 font-semibold text-purple-400">
                    {data.liveSessionCount.toLocaleString('fr-FR')}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/10 text-white font-bold">
                <td className="py-3">Total</td>
                <td className="text-right py-3">
                  {filteredData
                    .reduce((sum, data) => sum + data.profit, 0)
                    .toLocaleString('fr-FR')} Ar
                </td>
                <td className="text-right py-3">
                  {filteredData
                    .reduce((sum, data) => sum + data.orderCount, 0)
                    .toLocaleString('fr-FR')}
                </td>
                <td className="text-right py-3">
                  {filteredData
                    .reduce((sum, data) => sum + data.totalRevenue, 0)
                    .toLocaleString('fr-FR')} Ar
                </td>
                <td className="text-right py-3">
                  {filteredData
                    .reduce((sum, data) => sum + data.liveSessionCount, 0)
                    .toLocaleString('fr-FR')}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfitTable;