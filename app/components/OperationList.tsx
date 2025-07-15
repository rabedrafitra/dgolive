'use client';

import React, { useEffect, useState } from 'react';
import { readOperations } from '@/app/actions';
import { Operation } from '@prisma/client';
import { DollarSign } from 'lucide-react';

interface OperationListProps {
  email: string;
}

const OperationList = ({ email }: OperationListProps) => {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Chargement automatique toutes les 10 sec
  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const { operations, balance } = await readOperations(email);
        setOperations(operations);
        setBalance(balance);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchOperations();
    const interval = setInterval(fetchOperations, 10000);
    return () => clearInterval(interval);
  }, [email]);

  // Filtrage par dates
  const filteredOperations = operations.filter((op) => {
    const created = new Date(op.createdAt).getTime();
    const start = startDate ? new Date(startDate).getTime() : 0;
    const end = endDate ? new Date(endDate).getTime() : Infinity;
    return created >= start && created <= end;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOperations.length / itemsPerPage);
  const paginatedOperations = filteredOperations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-6 bg-base-100 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <DollarSign className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-white">Solde de la caisse</h2>
      </div>
      <p className="text-4xl font-bold text-green-400 mb-6">
        {balance.toLocaleString('fr-FR')} Ar
      </p>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setCurrentPage(1);
            setStartDate(e.target.value);
          }}
          className="input input-bordered text-white bg-base-200"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            setCurrentPage(1);
            setEndDate(e.target.value);
          }}
          className="input input-bordered text-white bg-base-200"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-4">Historique des opérations</h3>

      {loading ? (
        <div className="flex justify-center items-center w-full py-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredOperations.length === 0 ? (
        <p className="text-white">Aucune opération enregistrée.</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-primary/10 text-white">
                  <th className="text-left py-3">Date</th>
                  <th className="text-left py-3">Type</th>
                  <th className="text-right py-3">Montant (Ar)</th>
                  <th className="text-left py-3">Motif</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOperations.map((op) => (
                  <tr key={op.id} className="hover:bg-base-200 transition-colors duration-200">
                    <td className="py-3">
                      {new Date(op.createdAt).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="py-3">{op.operationType}</td>
                    <td className="text-right py-3 font-semibold text-green-400">
                      {op.amount.toLocaleString('fr-FR')} Ar
                    </td>
                    <td className="py-3">{op.reason || '-'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary/10 text-white font-bold">
                  <td className="py-3">Total</td>
                  <td></td>
                  <td className="text-right py-3">
                    {filteredOperations
                      .reduce((sum, op) => sum + op.amount, 0)
                      .toLocaleString('fr-FR')}{' '}
                    Ar
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-end gap-3 items-center mt-4 text-white">
            <button
              className="btn btn-sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              ◀ Précédent
            </button>
            <span>
              Page {currentPage} / {totalPages}
            </span>
            <button
              className="btn btn-sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Suivant ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OperationList;
