'use client';

import React, { useEffect, useState } from 'react';
import { readLives, getOrdersByLiveId } from '@/app/actions';
import { Live } from '@prisma/client';
import EmptyState from './EmptyState';

interface ProfitChartProps {
  email: string;
}

interface ProfitData {
  date: string;
  profit: number;
}

const ProfitTable = ({ email }: ProfitChartProps) => {
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

        const profitData: ProfitData[] = [];

        for (const live of livesData) {
          const orders = await getOrdersByLiveId(live.id);
          const totalCollected = Object.values(orders)
            .flat()
            .reduce((sum: number, item: { price: number; isDeliveredAndPaid: boolean }) => {
              return sum + (item.isDeliveredAndPaid ? item.price : 0);
            }, 0);
          const profit = totalCollected - (live.purchasePrice ?? 0);

          profitData.push({
            date: new Date(live.date).toLocaleDateString('fr-FR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }),
            profit,
          });
        }

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
    <div className="mt-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Profit par période</h2>
      <div className="flex gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-white">Date de début</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full max-w-xs"
            max={endDate}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white">Date de fin</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full max-w-xs"
            min={startDate}
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : filteredData.length === 0 ? (
        <EmptyState message="Aucune donnée de profit pour cette période" IconComponent="TrendingUp" />
      ) : (
        <div className="p-4 bg-base-100 rounded-3xl">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Profit (Ar)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.date}</td>
                  <td>{data.profit.toLocaleString('fr-FR')} Ar</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="font-bold">Total</td>
                <td className="font-bold">
                  {filteredData.reduce((sum, data) => sum + data.profit, 0).toLocaleString('fr-FR')} Ar
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