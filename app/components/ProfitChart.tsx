'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { readLives, getOrdersByLiveId } from '@/app/actions';
import EmptyState from './EmptyState';
import { TrendingUp } from 'lucide-react';

interface ProfitChartProps {
  email: string;
}

interface ProfitData {
  date: string;
  profit: number;
  orderCount: number;
  totalPaidAndCollected: number;
  liveSessionCount: number;
}

const ProfitChart = ({ email }: ProfitChartProps) => {
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

        const dataByDate: { [date: string]: ProfitData } = {};

        for (const live of livesData) {
          const orders = await getOrdersByLiveId(live.id);
          const ordersArray = Object.values(orders).flat();
          const totalPaidAndCollected = ordersArray.reduce(
            (sum: number, item: { price: number; isDeliveredAndPaid: boolean }) =>
              sum + (item.isDeliveredAndPaid ? item.price : 0),
            0
          );
          const orderCount = ordersArray.filter((item) => item.isDeliveredAndPaid).length;
          const profit = totalPaidAndCollected - (live.purchasePrice ?? 0);
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
              totalPaidAndCollected: 0,
              liveSessionCount: 0,
            };
          }

          dataByDate[date].profit += profit;
          dataByDate[date].orderCount += orderCount;
          dataByDate[date].totalPaidAndCollected += totalPaidAndCollected;
          dataByDate[date].liveSessionCount += 1;
        }

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
        Métriques par période
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
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="date" stroke="#F3F4F6" />
              <YAxis stroke="#F3F4F6" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#F3F4F6' }}
                cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
              />
              <Legend />
              <Bar dataKey="profit" fill="#10B981" name="Profit (Ar)" />
              <Bar dataKey="orderCount" fill="#FBBF24" name="Commandes" />
              <Bar dataKey="totalPaidAndCollected" fill="#3B82F6" name="Total payé et collecté (Ar)" />
              <Bar dataKey="liveSessionCount" fill="#8B5CF6" name="Sessions Live" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <p className="text-lg font-bold text-white">
              Total des profits : {filteredData.reduce((sum, data) => sum + data.profit, 0).toLocaleString('fr-FR')} Ar
            </p>
            <p className="text-lg font-bold text-white">
              Total des commandes : {filteredData.reduce((sum, data) => sum + data.orderCount, 0).toLocaleString('fr-FR')}
            </p>
            <p className="text-lg font-bold text-white">
              Chiffre Affaire: {filteredData.reduce((sum, data) => sum + data.totalPaidAndCollected, 0).toLocaleString('fr-FR')} Ar
            </p>
            <p className="text-lg font-bold text-white">
              Total sessions live : {filteredData.reduce((sum, data) => sum + data.liveSessionCount, 0).toLocaleString('fr-FR')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitChart;