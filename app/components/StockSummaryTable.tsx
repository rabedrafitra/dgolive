'use client';

import { StatLive } from '@/type';
import React, { useEffect, useState } from 'react';
import { getStatLive } from '../actions';
import EmptyState from './EmptyState';

const StockSummaryTable = ({ email }: { email: string }) => {
  const [data, setData] = useState<StatLive | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchSummary = async () => {
      try {
        if (!email) {
          throw new Error('Email requis');
        }
        setLoading(true);
        console.log('Récupération des données pour email:', email);
        const result = await getStatLive(email);
        console.log('Données reçues:', result);
        setData(result);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setError('Impossible de charger les statistiques. Veuillez réessayer.');
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchSummary();
    }
  }, [email]); // ✅ Plus de warning ici
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <EmptyState
        message={error || 'Aucune donnée disponible'}
        IconComponent="PackageSearch"
      />
    );
  }

  return (
    <div className="w-full">
      <ul className="steps steps-vertical border-2 border-base-200 w-full p-4 rounded-3xl">
        <li className="step step-primary">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">CA</span>
            <span className="badge bg-green-100 text-green-800 px-2 py-1 rounded">
              {data.totalRevenue.toLocaleString()} Ariary
            </span>
          </div>
        </li>
        <li className="step step-primary">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Commandes</span>
            <span className="badge bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              {data.orderCount}
            </span>
          </div>
        </li>
        <li className="step step-primary">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Clients</span>
            <span className="badge bg-red-100 text-red-800 px-2 py-1 rounded">
              {data.clientCount}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StockSummaryTable;