'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Live } from '@prisma/client';
import Wrapper from '../components/Wrapper';
import EmptyState from '../components/EmptyState';
import { Pencil, Trash, CirclePlay } from 'lucide-react';
import Link from 'next/link';
import LiveModal from '../components/LiveModal';
import {
  createLive,
  readLives,
  updateLive,
  deleteLive,
  getOrdersByLiveId,
  readClientsByLiveId,
} from '../actions';
import { toast } from 'react-toastify';

type LiveWithStats = Live & {
  totalAmount?: number;
  totalArticles?: number;
  totalCollected?: number;
  clientsWithOrders?: number;
  clientsDelivered?: number;
};

const Page = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress as string;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [purchasePrice, setPurchasePrice] = useState<number | undefined>(
    undefined
  );

  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingLiveId, setEditingLiveId] = useState<string | null>(null);

  const [month, setMonth] = useState(new Date());

  const [lives, setLives] = useState<LiveWithStats[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const loadLives = async (d = month) => {
    if (!email) return;

    try {
      setLoading(true);

      const data = await readLives(email, d);

      if (!data) {
        setLives([]);
        return;
      }

      const enrichedLives: LiveWithStats[] = await Promise.all(
        data.map(async (live) => {
          try {
            const orders = await getOrdersByLiveId(live.id);

            const clients =
              (await readClientsByLiveId(live.id, email)) || [];

            // const allOrders = Object.values(orders || {}).flat();
            const allOrders = Object.values(orders ?? {})
              .flat()
              .filter(Boolean);

            // TOTAL ARTICLES
            const totalArticles = allOrders.length;

            // TOTAL GENERAL SESSION
            const totalAmount = allOrders.reduce(
              (sum, item) => sum + item.price,
              0
            );

            // TOTAL COLLECTÉ
            const totalCollected = clients.reduce((sum, client) => {
              const clientOrders = orders?.[client.id] || [];

              const allPaid =
                clientOrders.length > 0 &&
                clientOrders.every(
                  (o) => o.isDeliveredAndPaid
                );

              return allPaid
                ? sum +
                    clientOrders.reduce(
                      (acc, cur) => acc + cur.price,
                      0
                    )
                : sum;
            }, 0);

            // CLIENTS AVEC COMMANDES
            const clientsWithOrders = clients.filter(
              (client) =>
                (orders?.[client.id] || []).length > 0
            ).length;

            // CLIENTS LIVRÉS
            const clientsDelivered = clients.filter(
              (client) => {
                const clientOrders =
                  orders?.[client.id] || [];

                return (
                  clientOrders.length > 0 &&
                  clientOrders.every(
                    (o) => o.isDeliveredAndPaid
                  )
                );
              }
            ).length;

            return {
              ...live,
              totalAmount,
              totalArticles,
              totalCollected,
              clientsWithOrders,
              clientsDelivered,
            };
          } catch (error) {
            console.error(
              `Erreur stats live ${live.id}:`,
              error
            );

            return {
              ...live,
              totalAmount: 0,
              totalArticles: 0,
              totalCollected: 0,
              clientsWithOrders: 0,
              clientsDelivered: 0,
            };
          }
        })
      );

      setLives(enrichedLives);

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
    setPurchasePrice(undefined);
    setEditMode(false);

    (
      document.getElementById(
        'live_modal'
      ) as HTMLDialogElement
    )?.showModal();
  };

  const closeModal = () => {
    setName('');
    setDescription('');
    setPurchasePrice(undefined);

    setEditMode(false);
    setEditingLiveId(null);

    (
      document.getElementById(
        'live_modal'
      ) as HTMLDialogElement
    )?.close();
  };

  const handleCreateLive = async () => {
    setLoading(true);

    try {
      if (email) {
        await createLive(
          name,
          email,
          description,
          purchasePrice
        );
      }

      await loadLives();

      closeModal();

      toast.success(
        'Session live créée avec succès.'
      );
    } catch (error) {
      console.error(error);

      toast.error(
        'Erreur lors de la création.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateLive = async () => {
    if (!editingLiveId) return;

    setLoading(true);

    try {
      if (email) {
        await updateLive(
          editingLiveId,
          email,
          name,
          description,
          purchasePrice
        );
      }

      await loadLives();

      closeModal();

      toast.success(
        'Information Live mise à jour avec succès.'
      );
    } catch (error) {
      console.error(error);

      toast.error(
        'Erreur lors de la modification.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLive = async (
    liveId: string
  ) => {
    const confirmDelete = confirm(
      'Voulez-vous vraiment supprimer cette session live ?'
    );

    if (!confirmDelete) return;

    try {
      await deleteLive(liveId, email);

      await loadLives();

      toast.success(
        'La session de live est supprimée avec succès!'
      );
    } catch (error) {
      console.error(error);

      toast.error(
        'Erreur lors de la suppression.'
      );
    }
  };

  const openEditModal = (live: Live) => {
    setName(live.name);

    setDescription(live.description || '');

    setPurchasePrice(
      live.purchasePrice ?? undefined
    );

    setEditMode(true);

    setEditingLiveId(live.id);

    (
      document.getElementById(
        'live_modal'
      ) as HTMLDialogElement
    )?.showModal();
  };

  const totalPages = Math.ceil(
    lives.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentLives = lives.slice(
    startIndex,
    endIndex
  );

  const changeMonth = (step: number) => {
    const newMonth = new Date(month);

    newMonth.setMonth(
      newMonth.getMonth() + step
    );

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
        <div className="mb-6 flex flex-col sm:flex-row gap-3">
          <button
            className="btn btn-primary"
            onClick={openCreateModal}
          >
            Ouvrir une Session Live
          </button>
        </div>

        {lives.length === 0 ? (
          <EmptyState
            message="Pas encore de session LIVE"
            IconComponent="CirclePlay"
          />
        ) : (
          <>
            <h1 className="text-xl md:text-2xl font-bold mb-4">
              Live du mois de{' '}
              {month.toLocaleDateString(
                'fr-FR',
                {
                  month: 'long',
                  year: 'numeric',
                }
              )}
            </h1>

            {/* Navigation Mois */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button
                className="btn btn-sm"
                onClick={() => changeMonth(-1)}
              >
                ⬅ Mois précédent
              </button>

              <button
                className="btn btn-sm btn-outline"
                onClick={() =>
                  setMonth(new Date())
                }
              >
                Aujourd’hui
              </button>

              <button
                className="btn btn-sm"
                onClick={() => changeMonth(1)}
              >
                Mois suivant ➡
              </button>
            </div>

            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="w-8">#</th>

                  <th>Date</th>

                  <th>Nom</th>

                  <th className="text-center">
                    Nbr Commandes
                  </th>

                  <th className="text-center">
                    Commandes Livrés
                  </th>

                  <th className="text-center">
                    Articles
                  </th>

                  <th className="text-right">
                    Total 
                  </th>

                  <th className="text-right">
                    Total Collecté
                  </th>

                  <th className="text-center w-32">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>      
                {currentLives.map(
                  (live, index) => (
                    <tr key={live.id}>
                      <th className="text-center">
                        {startIndex +
                          index +
                          1}
                      </th>

                      <td className="whitespace-nowrap">
                        {new Date(
                          live.date
                        ).toLocaleDateString(
                          'fr-FR'
                        )}
                      </td>

                      <td className="font-medium">
                        {live.name}
                      </td>

                      <td className="text-center font-semibold text-blue-600">
                        {live.clientsWithOrders ??
                          0}
                      </td>

                      <td className="text-center font-semibold text-green-600">
                        {live.clientsDelivered ??
                          0}
                      </td>

                      <td className="font-semibold text-center text-blue-600">
                        {live.totalArticles ??
                          0}
                      </td>

                      <td className="font-semibold text-right text-purple-600">
                        {(
                          live.totalAmount ?? 0
                        ).toLocaleString(
                          'fr-FR'
                        )}{' '}
                        Ar
                      </td>

                      <td className="font-semibold text-right text-green-600">
                        {(
                          live.totalCollected ??
                          0
                        ).toLocaleString(
                          'fr-FR'
                        )}{' '}
                        Ar
                      </td>

                      <td>
                        <div className="flex flex-wrap gap-1 justify-center">
                          <Link
                            className="btn btn-sm btn-success"
                            href={`/session/${live.id}`}
                            title="Ouvrir Session"
                          >
                            <CirclePlay className="w-3 h-3" />
                          </Link>

                          <button
                            className="btn btn-sm"
                            onClick={() =>
                              openEditModal(
                                live
                              )
                            }
                            title="Modifier"
                          >
                            <Pencil className="w-3 h-3" />
                          </button>

                          <button
                            className="btn btn-sm btn-error"
                            onClick={() =>
                              handleDeleteLive(
                                live.id
                              )
                            }
                            title="Supprimer"
                          >
                            <Trash className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>

              <tfoot>
                <tr className="font-bold bg-base-200">
                  <td colSpan={3}>
                    Totaux généraux
                  </td>

                  <td className="text-center text-blue-600">
                    {lives.reduce(
                      (sum, live) =>
                        sum +
                        (live.clientsWithOrders ??
                          0),
                      0
                    )}
                  </td>

                  <td className="text-center text-green-600">
                    {lives.reduce(
                      (sum, live) =>
                        sum +
                        (live.clientsDelivered ??
                          0),
                      0
                    )}
                  </td>

                  <td className="text-center text-blue-600">
                    {lives.reduce(
                      (sum, live) =>
                        sum +
                        (live.totalArticles ??
                          0),
                      0
                    )}
                  </td>

                  <td className="text-right text-purple-600">
                    {lives
                      .reduce(
                        (sum, live) =>
                          sum +
                          (live.totalAmount ??
                            0),
                        0
                      )
                      .toLocaleString(
                        'fr-FR'
                      )}{' '}
                    Ar
                  </td>

                  <td className="text-right text-green-600">
                    {lives
                      .reduce(
                        (sum, live) =>
                          sum +
                          (live.totalCollected ??
                            0),
                        0
                      )
                      .toLocaleString(
                        'fr-FR'
                      )}{' '}
                    Ar
                  </td>

                  <td></td>
                </tr>
              </tfoot>
            </table>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    goToPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                >
                  Précédent
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, i) => i + 1
                ).map((page) => (
                  <button
                    key={page}
                    className={`btn btn-sm ${
                      currentPage === page
                        ? 'btn-primary'
                        : ''
                    }`}
                    onClick={() =>
                      goToPage(page)
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  className="btn btn-sm"
                  onClick={() =>
                    goToPage(currentPage + 1)
                  }
                  disabled={
                    currentPage === totalPages
                  }
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
        onChangePurchasePrice={
          setPurchasePrice
        }
        onSubmit={
          editMode
            ? handleUpdateLive
            : handleCreateLive
        }
        editMode={editMode}
      />
    </Wrapper>
  );
};

export default Page;