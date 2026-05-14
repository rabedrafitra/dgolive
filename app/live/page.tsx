'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Live } from '@prisma/client';
import Wrapper from '../components/Wrapper';
import EmptyState from '../components/EmptyState';
import { Pencil, Trash, CirclePlay } from 'lucide-react';
import Link from 'next/link';
import LiveModal from '../components/LiveModal';
import { createLive, readLives, updateLive, deleteLive } from '../actions';
import { toast } from 'react-toastify';

const Page = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress as string;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [purchasePrice, setPurchasePrice] = useState<number | undefined>(undefined); // Changement ici
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingLiveId, setEditingLiveId] = useState<string | null>(null);
  const [month, setMonth] = useState(new Date());

 const [lives, setLives] = useState<
  (Live & {
    totalAmount?: number;
    totalArticles?: number;
  })[]
>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

//   const loadLives = async () => {
//     if (email) {
//       try {
//         setLoading(true);
//         const data = await readLives(email);
//         if (data) {
//           setLives(data);
//           setCurrentPage(1);
//         }
//       } catch (error) {
//         console.error('Erreur lors du chargement des sessions :', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//    useEffect(() => {
//     if (email) {
//       loadLives();
//     }
//   }, [email]);
  
const loadLives = async (d = month) => {
  if (!email) return;

  try {
    setLoading(true);
    const data = await readLives(email, d);
    setLives(data || []);
    setCurrentPage(1);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  if (!email) return;
  loadLives(month);
}, [email, month]);
 

  const openCreateModal = () => {
    setName('');
    setDescription('');
    setPurchasePrice(undefined); // Réinitialiser à undefined
    setEditMode(false);
    (document.getElementById('live_modal') as HTMLDialogElement)?.showModal();
  };

  const closeModal = () => {
    setName('');
    setDescription('');
    setPurchasePrice(undefined); // Réinitialiser à undefined
    setEditMode(false);
    setEditingLiveId(null);
    (document.getElementById('live_modal') as HTMLDialogElement)?.close();
  };

  const handleCreateLive = async () => {
    setLoading(true);
    if (email) {
      await createLive(name, email, description, purchasePrice); // purchasePrice est déjà number | undefined
    }
    await loadLives();
    closeModal();
    setLoading(false);
    toast.success('Session live créée avec succès.');
  };

  const handleUpdateLive = async () => {
    if (!editingLiveId) return;
    setLoading(true);
    if (email) {
      await updateLive(editingLiveId, email, name, description, purchasePrice); // purchasePrice est déjà number | undefined
    }
    await loadLives();
    closeModal();
    setLoading(false);
    toast.success('Information Live mise à jour avec succès.');
  };

  const handleDeleteLive = async (liveId: string) => {
    const confirmDelete = confirm(
      'Voulez-vous vraiment supprimer cette session live ?'
    );
    if (!confirmDelete) return;
    await deleteLive(liveId, email);
    await loadLives();
    toast.success('La session de live est supprimée avec succès.');
  };

  const openEditModal = (live: Live) => {
    setName(live.name);
    setDescription(live.description || '');
    setPurchasePrice(live.purchasePrice ?? undefined); // Charger purchasePrice
    setEditMode(true);
    setEditingLiveId(live.id);
    (document.getElementById('live_modal') as HTMLDialogElement)?.showModal();
  };

  const totalPages = Math.ceil(lives.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLives = lives.slice(startIndex, endIndex);

  const changeMonth = (step: number) => {
  const newMonth = new Date(month);
  newMonth.setMonth(newMonth.getMonth() + step);
  setMonth(newMonth);
};

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Wrapper>
      <div className="overflow-x-auto">
        <div className="mb-4">
          <button className="btn btn-primary" onClick={openCreateModal}>
            Ouvrir une Session Live
          </button>
        </div>

        {lives.length === 0 ? (
          <div>
            <EmptyState
              message="Pas encore de session LIVE"
              IconComponent="CirclePlay"
            />
          </div>
        ) : (
          <>
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            Live du mois de{" "}
            {month.toLocaleDateString("fr-FR", {
              month: "long",
              year: "numeric",
            })}
        </h1>

        <div className="flex flex-col md:flex-row gap-2 mb-4">
            <button className="btn btn-sm" onClick={() => changeMonth(-1)}>
              ⬅ Mois précédent
            </button>

            <button
              className="btn btn-sm btn-outline"
              onClick={() => setMonth(new Date())}
            >
              Aujourd’hui
            </button>

            <button className="btn btn-sm" onClick={() => changeMonth(1)}>
              Mois suivant ➡
            </button>
  </div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Input Price (Ar)</th>
                  <th>Nb Articles</th>
                  <th>Total Articles (Ar)</th>
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
                    <td>{live.purchasePrice ? `${live.purchasePrice} Ar` : '-'}</td>
                    <td className="font-semibold text-center text-blue-600">
                      {live.totalArticles || 0}
                    </td>

                    <td className="font-semibold text-center text-green-600">
                      {(live.totalAmount || 0).toLocaleString('fr-FR')} Ar
                    </td>
                    <td className="flex gap-2">
                      <Link
                        className="btn btn-sm w-fit"
                        href={`/session/${live.id}`}
                        title="Commencer Live"
                      >
                        <CirclePlay className="w-4 h-4" />
                      </Link>
                      <button
                        className="btn btn-sm"
                        onClick={() => openEditModal(live)}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDeleteLive(live.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

 {totalPages > 1 && (
  <div className="flex flex-wrap justify-center gap-2 mt-4">
    
    <button
      className="btn btn-xs md:btn-sm"
      onClick={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Précédent
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        className={`btn btn-xs md:btn-sm ${
          currentPage === page ? "btn-primary" : ""
        }`}
        onClick={() => goToPage(page)}
      >
        {page}
      </button>
    ))}

    <button
      className="btn btn-xs md:btn-sm"
      onClick={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Suivant
    </button>

  </div>
)}
          </>
        )}
      </div>

      <LiveModal
        name={name}
        description={description}
        purchasePrice={purchasePrice}
        loading={loading}
        onclose={closeModal}
        onChangeName={setName}
        onChangeDescription={setDescription}
        onChangePurchasePrice={setPurchasePrice}
        onSubmit={editMode ? handleUpdateLive : handleCreateLive}
        editMode={editMode}
      />
    </Wrapper>
  );
};

export default Page;