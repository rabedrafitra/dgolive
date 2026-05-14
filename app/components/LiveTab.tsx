
'use client';

import React, { useEffect, useState } from 'react';
import { Live } from '@prisma/client';
import { readLives } from '@/app/actions';
import EmptyState from './EmptyState';
import { CirclePlay } from 'lucide-react';
import Link from 'next/link';

interface LiveTabProps {
  email: string;
}

const LiveTab = ({ email }: LiveTabProps) => {
  const [lives, setLives] = useState<Live[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadLives = async () => {
      try {
        if (!email) {
          throw new Error('Email requis');
        }
        setLoading(true);
        const data = await readLives(email);
        console.log('Sessions reçues:', data);
        setLives(data || []);
        setCurrentPage(1);
      } catch (error) {
        console.error('Erreur lors de la récupération des sessions live:', error);
        setError('Impossible de charger les sessions live.');
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      loadLives();
    }
  }, [email]); // ✅ Aucun avertissement ici

  // Calculer les sessions à afficher pour la page courante
  const totalPages = Math.ceil(lives.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLives = lives.slice(startIndex, endIndex);

  // Gérer les changements de page
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error || lives.length === 0) {
    return (
      <EmptyState
        message={error || 'Pas encore de session LIVE'}
        IconComponent="PackageSearch"
      />
    );
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Les 5 dernières sessions de live
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentLives.map((live, index) => (
            <tr key={live.id}>
              <th>{startIndex + index + 1}</th>
              <td>{live.date.toLocaleDateString()}</td>
              <td>{live.name}</td>
              <td>{live.description || '-'}</td>
              <td>
                <Link
                  className="btn btn-sm w-fit"
                  href={`/session/${live.id}`}
                  title="Commencer Live"
                >
                  <CirclePlay className="w-4 h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Barre de pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            className="btn btn-sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`btn btn-sm ${currentPage === page ? 'btn-primary' : ''}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="btn btn-sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveTab;