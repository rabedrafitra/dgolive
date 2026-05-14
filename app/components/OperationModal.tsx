'use client';

import React, { useState } from 'react';
import { createOperation } from '@/app/actions';
import { useRouter } from 'next/navigation';

interface OperationModalProps {
  email: string;
  isOpen: boolean;
  onClose: () => void;
}

const OperationModal = ({ email, isOpen, onClose }: OperationModalProps) => {
  const router = useRouter();
  const [operationType, setOperationType] = useState<string>('Dépôt');
  const [amount, setAmount] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount)) {
        throw new Error('Montant invalide');
      }
      const finalAmount = operationType === 'Retrait' ? -parsedAmount : parsedAmount;

      await createOperation(email, operationType, finalAmount, reason || undefined);
      router.refresh();
      setAmount('');
      setReason('');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-base-100 rounded-3xl shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Nouvelle opération</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-white mb-1 block">Type Operation</label>
            <select
              value={operationType}
              onChange={(e) => setOperationType(e.target.value)}
              className="select select-bordered w-full bg-base-200 text-white"
            >
              <option value="Dépôt">Dépôt</option>
              <option value="Retrait">Retrait</option>
              <option value="Ajustement">Ajustement</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-white mb-1 block">Montant (Ar)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input input-bordered w-full bg-base-200 text-white placeholder-gray-400"
              placeholder="Entrez le montant"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white mb-1 block">Motif (optionnel)</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="input input-bordered w-full bg-base-200 text-white placeholder-gray-400"
              placeholder="Entrez le motif"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-ghost text-white"
              onClick={onClose}
              disabled={loading}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OperationModal;