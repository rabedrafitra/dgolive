'use client';

import { readAllClients, updateClient, deleteClient, getAllOrdersByClientId } from '@/app/actions';
import { useUser } from '@clerk/nextjs';
import { Client } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { Pencil, Trash, FileText } from 'lucide-react';
import ClientModal from '@/app/components/ClientModal';
import { toast } from 'react-toastify';
import Wrapper from '@/app/components/Wrapper';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const ITEMS_PER_PAGE = 30;
const AllClientsPage = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress as string;
  const [clients, setClients] = useState<Client[]>([]);
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [tel, setTel] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [clientOrders, setClientOrders] = useState<
    { id: string; reference: string; unitPrice: number; quantity: number; liveDate: Date | null }[]
  >([]);

  const fetchClients = async () => {
    try {
      if (email) {
        const allClients = await readAllClients(email);
        if (allClients) {
          setClients(allClients);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [email]);

  const openEditModal = (client: Client) => {
    setName(client.name);
    setAdress(client.address || '');
    setTel(client.tel || '');
    setEditingClientId(client.id);
    setEditMode(true);
    (document.getElementById('client_modal') as HTMLDialogElement)?.showModal();
  };

  const handleUpdateClient = async () => {
    if (!editingClientId || !email) return;
    setLoading(true);
    try {
      await updateClient(editingClientId, name, adress, tel, email);
      toast.success('Client mis à jour.');
      await fetchClients();
      (document.getElementById('client_modal') as HTMLDialogElement)?.close();
    } catch (error) {
      toast.error('Erreur lors de la mise à jour du client.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClient = async (id: string) => {
    const confirm = window.confirm('Supprimer ce client définitivement ?');
    if (!confirm) return;
    try {
      await deleteClient(id, email);
      toast.success('Client supprimé.');
      await fetchClients();
    } catch (error) {
      toast.error('Erreur lors du retrait du client.');
      console.error(error);
    }
  };

  const openOrdersModal = async (client: Client) => {
    setSelectedClient(client);
    try {
      const orders = await getAllOrdersByClientId(client.id, email);
      setClientOrders(orders || []);
      (document.getElementById('orders_modal') as HTMLDialogElement)?.showModal();
    } catch (error) {
      toast.error('Erreur lors du chargement des commandes.');
      console.error(error);
    }
  };

  const closeOrdersModal = () => {
    setSelectedClient(null);
    setClientOrders([]);
    (document.getElementById('orders_modal') as HTMLDialogElement)?.close();
  };

  // Filtrage + pagination
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Wrapper>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Tous vos Clients</h1>

        {/* Champ de recherche */}
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="input input-bordered mb-4 w-full max-w-md"
        />

        {/* Tableau */}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedClients.map((client, idx) => (
              <tr key={client.id}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                <td>{client.name}</td>
                <td>{client.address}</td>
                <td>{client.tel}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm" onClick={() => openEditModal(client)}>
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button className="btn btn-sm btn-info" onClick={() => openOrdersModal(client)}>
                    <FileText className="w-4 h-4" />
                  </button>
                  <button className="btn btn-sm btn-error" onClick={() => handleDeleteClient(client.id)}>
                    <Trash className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Modal client */}
        <ClientModal
          name={name}
          adress={adress}
          tel={tel}
          loading={loading}
          onclose={() => (document.getElementById('client_modal') as HTMLDialogElement)?.close()}
          onChangeName={setName}
          onChangeAdress={setAdress}
          onChangeTel={setTel}
          onSubmit={handleUpdateClient}
          editMode={editMode}
        />

        {/* Modal pour afficher les commandes du client */}
        {selectedClient && (
          <dialog id="orders_modal" className="modal">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-lg">Commandes de {selectedClient.name}</h3>
              <div className="text-sm mt-2 mb-4 space-y-1">
                <p>
                  <strong>Téléphone :</strong> {selectedClient.tel || 'N/A'}
                </p>
                <p>
                  <strong>Adresse :</strong> {selectedClient.address || 'N/A'}
                </p>
              </div>
              <p className="py-2 font-semibold">Historique des commandes :</p>
              {clientOrders.length === 0 ? (
                <p className="text-sm text-gray-500">Aucune commande trouvée.</p>
              ) : (
                <table className="w-full text-sm border border-gray-300 border-collapse rounded overflow-hidden mb-4 shadow-sm">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="border border-gray-200 px-3 py-2 text-left">#</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">Référence</th>
                      <th className="border border-gray-200 px-3 py-2 text-right">Prix (Ar)</th>
                      <th className="border border-gray-200 px-3 py-2 text-left">Date du Live</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientOrders.map((order, i) => (
                      <tr key={order.id}>
                        <td className="border border-gray-300 px-3 py-2">{i + 1}</td>
                        <td className="border border-gray-300 px-3 py-2">{order.reference}</td>
                        <td className="border border-gray-300 px-3 py-2 text-right">
                          {(order.unitPrice * order.quantity).toLocaleString('fr-FR')} Ar
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          {order.liveDate
                            ? format(new Date(order.liveDate), 'dd/MM/yyyy', { locale: fr })
                            : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="font-semibold">
                      <td colSpan={2} className="border border-gray-300 px-3 py-2 text-right">
                        Total :
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">
                        {clientOrders
                          .reduce((acc, order) => acc + order.unitPrice * order.quantity, 0)
                          .toLocaleString('fr-FR')} Ar
                      </td>
                      <td className="border border-gray-300 px-3 py-2"></td>
                    </tr>
                  </tfoot>
                </table>
              )}
              <div className="flex justify-end items-center gap-4 mt-6">
                <form method="dialog">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
                    onClick={closeOrdersModal}
                  >
                    Fermer
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </Wrapper>
  );
};

export default AllClientsPage;