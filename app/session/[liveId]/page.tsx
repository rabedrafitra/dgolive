'use client';

import { readClientsByLiveId, searchClients, addClientToLive, deleteOrderItem, readLiveById, createClient, updateOrderItem, updateClient, getOrdersByLiveId, deleteClientFromLive, createOrderItem, updateOrderItemStatus, createOperation, readOperations } from '@/app/actions';
import Wrapper from '@/app/components/Wrapper';
import { useUser } from '@clerk/nextjs';
import { Client, Live } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Pencil, Trash, PlusCircle, UserRoundPlus, Search } from 'lucide-react';
import EmptyState from '@/app/components/EmptyState';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import ClientModal from '@/app/components/ClientModal';
import OrderModal from '@/app/components/OrderModal';
import Image from 'next/image';
import * as XLSX from 'xlsx';

const Page = ({ params }: { params: Promise<{ liveId: string }> }) => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress as string;
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [tel, setTel] = useState('');
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [live, setLive] = useState<Live | null>(null);
  const [leftSearchQuery, setLeftSearchQuery] = useState('');
  const [leftSearchResults, setLeftSearchResults] = useState<Client[]>([]);
  const [rightSearchQuery, setRightSearchQuery] = useState('');
  const [rightSearchResults, setRightSearchResults] = useState<Client[]>([]);
  const [orders, setOrders] = useState<{
    [clientId: string]: { id: string; ref: string; price: number; isDeliveredAndPaid: boolean }[];
  }>({});
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [invoiceClient, setInvoiceClient] = useState<Client | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null); // Nouvel état pour l'ordre de tri

  const totalCollected = Object.values(orders).flat().reduce((sum, item) => sum + (item.isDeliveredAndPaid ? item.price : 0), 0);
  const profit = totalCollected - (live?.purchasePrice || 0);

  const fetchClients = async () => {
    try {
      const { liveId } = await params;
      if (email) {
        const fetchedClients = await readClientsByLiveId(liveId, email);
        if (fetchedClients) {
          setClients(fetchedClients);
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement des clients:', error);
    }
  };

  useEffect(() => {
    if (email) {
      fetchClients();
    }
  }, [email, params]);

  const handleLeftSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setLeftSearchQuery(query);
    if (query.length < 2) {
      setLeftSearchResults([]);
      return;
    }
    try {
      setLoading(true);
      const results = await searchClients(query);
      setLeftSearchResults(results);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      toast.error('Erreur lors de la recherche des clients.');
    } finally {
      setLoading(false);
    }
  };

  const handleRightSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setRightSearchQuery(query);
    if (query.length < 2) {
      setRightSearchResults([]);
      return;
    }
    try {
      setLoading(true);
      const { liveId } = await params;
      const allClients: Client[] | undefined = await readClientsByLiveId(liveId, email);
      if (!allClients) {
        setRightSearchResults([]);
        return;
      }
      const filteredClients = allClients.filter((client) =>
        client.name.toLowerCase().includes(query.toLowerCase())
      );
      setRightSearchResults(filteredClients);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      toast.error('Erreur lors de la recherche des clients.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddClient = async (client: Client) => {
    setLoading(true);
    try {
      const { liveId } = await params;
      await addClientToLive(liveId, client.id);
      await fetchClients();
      setLeftSearchQuery('');
      setLeftSearchResults([]);
      toast.success(`Client ${client.name} ajouté à la session.`);
    } catch (error: unknown) {
      console.error('Erreur lors de l’ajout du client:', error);
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l’ajout du client.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchLive = async () => {
      try {
        const { liveId } = await params;
        if (email) {
          const fetchedLive = await readLiveById(liveId, email);
          if (fetchedLive) {
            setLive(fetchedLive);
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement du live:', error);
      }
    };
    if (email) {
      fetchLive();
    }
  }, [email, params]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { liveId } = await params;
        if (!email) {
          throw new Error('Email requis');
        }
        const fetchedOrder = await getOrdersByLiveId(liveId);
        if (fetchedOrder) {
          setOrders(fetchedOrder);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des commandes:', error);
      }
    };
    if (email) {
      fetchOrder();
    }
  }, [email, params]);

  useEffect(() => {
    const fetchBalance = async () => {
      if (email) {
        try {
          const { balance } = await readOperations(email);
          setBalance(balance);
        } catch (error) {
          console.error('Erreur lors de la récupération du solde:', error);
        }
      }
    };
    fetchBalance();
  }, [email, orders]);

  const openCreateModal = () => {
    setName('');
    setAdress('');
    setTel('');
    setEditMode(false);
    (document.getElementById('client_modal') as HTMLDialogElement)?.showModal();
  };

  const closeModal = () => {
    setName('');
    setAdress('');
    setTel('');
    setEditMode(false);
    (document.getElementById('client_modal') as HTMLDialogElement)?.close();
  };

  const handleCheckboxChange = async (clientId: string, orderId: string, checked: boolean) => {
    if (!clientId || !orderId) {
      console.error('Erreur: clientId ou orderId manquant', { clientId, orderId });
      return;
    }
    const clientOrders = orders[clientId] || [];
    const orderExists = clientOrders.some((order) => order.id === orderId);
    if (!orderExists) {
      console.error('Erreur: commande non trouvée', { clientId, orderId });
      return;
    }
    try {
      await updateOrderItemStatus(orderId, checked);
      const orderToUpdate = clientOrders.find((order) => order.id === orderId);
      if (orderToUpdate) {
        const amount = checked ? orderToUpdate.price : -orderToUpdate.price;
        const reason = checked ? `achat article ${orderToUpdate.ref}` : `annulation achat ${orderToUpdate.ref}`;
        await createOperation(email, checked ? 'crédit' : 'débit', amount, reason);
        setOrders((prev) => {
          const updatedOrders = prev[clientId].map((order) =>
            order.id === orderId ? { ...order, isDeliveredAndPaid: checked } : order
          );
          return { ...prev, [clientId]: updatedOrders };
        });
        const newTotalCollected = Object.values(orders).flat().reduce((sum, item) => sum + (item.isDeliveredAndPaid ? item.price : 0), 0);
        const adjustment = newTotalCollected - totalCollected;
        if (adjustment !== 0) {
          await createOperation(email, adjustment > 0 ? 'crédit' : 'débit', Math.abs(adjustment), `ajustement total collecté`);
        }
        const { balance } = await readOperations(email);
        setBalance(balance);
        toast.success(`Statut de la commande ${orderToUpdate.ref} mis à jour avec succès.`);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut de la commande:', { error, clientId, orderId, checked });
      toast.error('Erreur lors de la mise à jour de la commande.');
    }
  };

  const handleCreateClient = async () => {
    setLoading(true);
    try {
      const { liveId } = await params;
      if (email && liveId) {
        await createClient(name, adress, tel, email, liveId);
      }
      await fetchClients();
      closeModal();
      toast.success('Client ajouté avec succès.');
    } catch (error) {
      console.error('Erreur création client:', error);
      toast.error('Erreur lors de l\'ajout du client.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClient = async () => {
    if (!editingClientId) return;
    setLoading(true);
    if (email) {
      await updateClient(editingClientId, name, adress, tel, email);
    }
    await fetchClients();
    closeModal();
    setLoading(false);
    toast.success('Information client mise à jour avec succès.');
  };

  const openOrderModal = (clientId: string) => {
    setSelectedClientId(clientId);
  };

  const openInvoiceModal = (client: Client) => {
    setInvoiceClient(client);
    const modal = document.getElementById('invoice_modal') as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  const handleRemoveClientFromLive = async (clientId: string) => {
    const { liveId } = await params;
    const confirmDelete = confirm('Retirer ce client de ce live ?');
    if (!confirmDelete) return;
    try {
      await deleteClientFromLive(liveId, clientId);
      await fetchClients();
      toast.success('Client retiré de ce live.');
    } catch (error) {
      toast.error('Erreur lors du retrait du client.');
      console.error(error);
    }
  };

  const openEditModal = (client: Client) => {
    setName(client.name);
    setAdress(client.address || '');
    setTel(client.tel || '');
    setEditMode(true);
    setEditingClientId(client.id);
    (document.getElementById('client_modal') as HTMLDialogElement)?.showModal();
  };

  const handleAddOrder = async (clientId: string, ref: string, price: number) => {
    const { liveId } = await params;
    if (!clientId || !live) return;
    try {
      const newOrder = await createOrderItem({
        liveId: liveId,
        clientId,
        reference: ref,
        quantity: 1,
        unitPrice: price,
        isDeliveredAndPaid: false,
      });
      setOrders((prev) => {
        const currentOrders = prev[clientId] || [];
        return {
          ...prev,
          [clientId]: [
            ...currentOrders,
            {
              id: newOrder.id,
              ref: newOrder.reference,
              price: newOrder.unitPrice * newOrder.quantity,
              isDeliveredAndPaid: false,
            },
          ],
        };
      });
      toast.success('Commande ajoutée avec succès !');
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de l\'ajout de la commande.');
    } finally {
      setSelectedClientId(null);
    }
  };

  // Fonction pour trier les clients par ordre alphabétique
  const handleSortClients = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    const sortedClients = [...clients].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (newSortOrder === 'asc') {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      } else {
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      }
    });
    setClients(sortedClients);
  };

  const formattedDate = live?.date
    ? format(new Date(live.date), 'EEEE d MMMM yyyy', { locale: fr })
    : '';

  const handlePrintOrders = () => {
    const printContent = `
      <html>
        <head>
          <title>Liste des Commandes - ${live?.name || 'Session'}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
            th { background-color: #f2f2f2; }
            .total { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>Liste des Commandes - ${live?.name || 'Session'} (${formattedDate})</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Contact</th>
                <th>Total (Ar)</th>
              </tr>
            </thead>
            <tbody>
              ${clients.map((client, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${client.name}</td>
                  <td>${client.tel || 'N/A'}</td>
                  <td>${(orders[client.id] || []).reduce((acc, cur) => acc + cur.price, 0).toLocaleString('fr-FR')} Ar</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot>
              <tr class="total">
                <td colspan="3">Total général :</td>
                <td>${Object.values(orders).flat().reduce((sum, item) => sum + item.price, 0).toLocaleString('fr-FR')} Ar</td>
              </tr>
            </tfoot>
          </table>
        </body>
      </html>
    `;
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleExportExcel = () => {
    const data = clients.map((client, index) => ({
      '#': index + 1,
      Nom: client.name,
      Contact: client.tel || 'N/A',
      'Total (Ar)': (orders[client.id] || []).reduce((acc, cur) => acc + cur.price, 0),
    }));
    data.push({
      '#': 0,
      Nom: '',
      Contact: 'Total général :',
      'Total (Ar)': Object.values(orders).flat().reduce((sum, item) => sum + item.price, 0),
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Commandes');
    XLSX.writeFile(wb, `Commandes_${live?.name || 'Session'}_${formattedDate}.xlsx`);
  };

  return (
    <Wrapper>
      <div className="overflow-x-auto">
        <div className="mb-4 flex flex-col gap-4">
          <div>
            <button className="btn btn-primary" onClick={openCreateModal}>
              <UserRoundPlus className="w-5 h-5 mr-2" />
              Ajouter un Client à la Session
            </button>
            <button
              className="btn btn-outline btn-sm ml-4"
              onClick={handleSortClients}
            >
              Trier par nom ({sortOrder === 'asc' ? 'A-Z' : sortOrder === 'desc' ? 'Z-A' : 'Par défaut'})
            </button>
          </div>
          <div className="flex justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <div className="flex items-center border border-gray-300 rounded-md bg-white">
                <input
                  type="text"
                  className="input input-sm input-bordered w-full rounded-md py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ajouter un client existant..."
                  value={leftSearchQuery}
                  onChange={handleLeftSearch}
                  disabled={loading}
                  aria-label="Ajouter un client existant"
                />
                <Search className="w-5 h-5 text-gray-500 mr-2" />
              </div>
              {loading && (
                <span className="loading loading-spinner loading-xs absolute right-8 top-2.5 text-gray-500" />
              )}
              {leftSearchResults.length > 0 && (
                <ul className="absolute z-20 bg-white border border-gray-300 w-full max-w-sm mt-1 max-h-60 overflow-y-auto rounded-md shadow-lg">
                  {leftSearchResults.map((client) => (
                    <li
                      key={client.id}
                      className="p-2 text-base-content text-base hover:bg-primary/10 cursor-pointer"
                      onClick={() => handleAddClient(client)}
                    >
                      {client.name} {client.tel && `(${client.tel})`}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative w-full max-w-sm">
              <div className="flex items-center border border-gray-300 rounded-md bg-white">
                <input
                  type="text"
                  className="input input-sm input-bordered w-full rounded-md py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Rechercher un client dans le live..."
                  value={rightSearchQuery}
                  onChange={handleRightSearch}
                  disabled={loading}
                  aria-label="Rechercher un client dans le live"
                />
                <Search className="w-5 h-5 text-gray-500 mr-2" />
              </div>
              {loading && (
                <span className="loading loading-spinner loading-xs absolute right-8 top-2.5 text-gray-500" />
              )}
              {rightSearchResults.length > 0 && (
                <ul className="absolute z-20 bg-white border border-gray-300 w-full mt-1 max-h-60 overflow-y-auto rounded-md shadow-lg">
                  {rightSearchResults.map((client) => (
                    <li
                      key={client.id}
                      className="p-2 text-base-content text-base hover:bg-primary/10 cursor-pointer flex justify-between items-center"
                    >
                      <span>
                        {client.name} {client.tel && `(${client.tel})`}
                      </span>
                      <button
                        className="btn btn-xs btn-success"
                        onClick={() => openOrderModal(client.id)}
                        title="Ajouter Article"
                      >
                        <PlusCircle className="w-3 h-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {clients.length === 0 ? (
          <div>
            <EmptyState message="Pas encore de Client" IconComponent="User" />
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th colSpan={9} className="text-3xl font-bold text-center py-4 text-primary">
                  {live ? `${live.name} — ${formattedDate}` : 'Détails du Live'}
                </th>
              </tr>
              <tr>
                <th colSpan={9} className="text-lg text-center py-2">
                  Purchase Price: {live?.purchasePrice ? `${live.purchasePrice.toLocaleString('fr-FR')} Ar` : 'N/A'}
                </th>
              </tr>
              <tr>
                <th className="text-center"></th>
                <th className="text-lg">Nom</th>
                <th className="text-lg">Adresse</th>
                <th className="text-lg">Contact</th>
                <th className="text-lg">Articles</th>
                <th className="text-lg">Total</th>
                <th className="text-lg">Actions</th>
                <th className="text-lg">Payé</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={client.id}>
                  <th>{index + 1}</th>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>{client.tel}</td>
                  <td className="w-64">
                    {(orders[client.id] || []).map((order, idx) => (
                      <div key={idx} className="text-sm">
                        Réf {order.ref} - {order.price} Ar
                      </div>
                    ))}
                    {(orders[client.id] || []).length === 0 && (
                      <div className="text-sm text-gray-500">Aucun article</div>
                    )}
                  </td>
                  <td className="font-semibold text-center">
                    {(orders[client.id] || []).reduce((acc, cur) => acc + cur.price, 0)} Ar
                  </td>
                  <td className="align-middle">
                    <div className="flex gap-2 justify-center">
                      <button
                        className="btn btn-sm btn-success"
                        title="Ajouter Article"
                        onClick={() => openOrderModal(client.id)}
                      >
                        <PlusCircle className="w-4 h-4" />
                      </button>
                      <button
                        className="btn btn-sm"
                        title="Modifier Client"
                        onClick={() => openEditModal(client)}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        className="btn btn-sm btn-info"
                        title="Facture"
                        onClick={() => openInvoiceModal(client)}
                      >
                        📄
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        title="Supprimer"
                        onClick={() => handleRemoveClientFromLive(client.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td>
                    {(orders[client.id] || []).map((order, idx) => (
                      <div key={idx} className="text-sm flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={order.isDeliveredAndPaid}
                          onChange={(e) => handleCheckboxChange(client.id, order.id, e.target.checked)}
                          className="checkbox checkbox-xs"
                          title="Livré et payé"
                        />
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t">
                <td colSpan={6} className="text-right pr-4">
                  <span className="text-lg font-bold text-green-600">Total général :</span>
                </td>
                <td colSpan={3} className="text-lg font-bold text-green-600 text-center">
                  <span>
                    {Object.values(orders).flat().reduce((sum, item) => sum + item.price, 0)} Ar
                  </span>
                  <span className="ml-4 text-blue-600">
                    ({Object.values(orders).flat().length} articles)
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="text-right pr-4">
                  <span className="text-lg font-bold text-blue-600">Total collecté (livré et payé) :</span>
                </td>
                <td colSpan={3} className="text-lg font-bold text-blue-600 text-center">
                  <span>
                    {totalCollected.toLocaleString('fr-FR')} Ar
                  </span>
                  <span className="ml-4 text-blue-600">
                    ({Object.values(orders).flat().filter((item) => item.isDeliveredAndPaid).length} articles)
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="text-right pr-4">
                  <span className="text-lg font-bold text-purple-600">Profit :</span>
                </td>
                <td colSpan={3} className="text-lg font-bold text-purple-600 text-center">
                  <span>
                    {profit.toLocaleString('fr-FR')} Ar
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="text-right pr-4">
                  <span className="text-lg font-bold text-gray-800">Solde :</span>
                </td>
                <td colSpan={3} className="text-lg font-bold text-gray-800 text-center">
                  <span>
                    {balance.toLocaleString('fr-FR')} Ar
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={9} className="text-center">
                  <div className="mt-2 flex gap-2 justify-center">
                    <button className="btn btn-outline btn-sm" onClick={handlePrintOrders}>
                      🖨️ Imprimer Liste
                    </button>
                    <button className="btn btn-outline btn-sm" onClick={handleExportExcel}>
                      📊 Exporter Excel
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
      <div className="mb-4">
        <button className="btn btn-primary" onClick={openCreateModal}>
          <UserRoundPlus className="w-12 h-12" />
        </button>
      </div>

      <ClientModal
        name={name}
        adress={adress}
        tel={tel}
        loading={loading}
        onclose={closeModal}
        onChangeName={setName}
        onChangeAdress={setAdress}
        onChangeTel={setTel}
        onSubmit={editMode ? handleUpdateClient : handleCreateClient}
        editMode={editMode}
      />

      {selectedClientId && (
        <OrderModal
          clientId={selectedClientId}
          client={clients.find((c) => c.id === selectedClientId)}
          liveDate={live?.date ? live.date.toLocaleDateString('fr-FR') : null}
          onAddOrder={handleAddOrder}
          onClose={() => setSelectedClientId(null)}
        />
      )}

      {invoiceClient && (
        <dialog id="invoice_modal" className="modal">
          <div className="modal-box max-w-2xl" id="invoice-content">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/innovas.png"
                alt="Logo Association"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h2 className="text-xl font-bold">Innovas Management</h2>
                <p className="text-sm text-gray-600">Facture client</p>
              </div>
            </div>
            <h3 className="font-bold text-lg">Facture : {invoiceClient.name}</h3>
            <div className="text-sm mt-2 mb-4 space-y-1">
              <p>
                <strong>Adresse :</strong> {invoiceClient.address || 'N/A'}
              </p>
              <p>
                <strong>Téléphone :</strong> {invoiceClient.tel || 'N/A'}
              </p>
              <p>
                <strong>Date :</strong>{' '}
                {live?.date ? format(new Date(live.date), 'dd/MM/yyyy') : 'N/A'}
              </p>
            </div>
            <p className="py-2 font-semibold">Articles achetés :</p>
            <table className="w-full text-sm border border-gray-300 border-collapse rounded overflow-hidden mb-4 shadow-sm">
              <thead className="bg-gray-800 text-white print:bg-white print:text-black">
                <tr>
                  <th className="border border-gray-200 px-3 py-2 text-left">#</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Référence</th>
                  <th className="border border-gray-200 px-3 py-2 text-right">Prix (Ar)</th>
                  <th className="border border-gray-200 px-3 py-2 text-center print:hidden">Action</th>
                </tr>
              </thead>
              <tbody>
                {(orders[invoiceClient.id] || []).map((order, i) => (
                  <tr key={order.id}>
                    <td className="border border-gray-300 px-3 py-2">{i + 1}</td>
                    <td className="border border-gray-300 px-3 py-2">
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 print:hidden"
                        value={order.ref}
                        onChange={(e) => {
                          const newOrders = [...orders[invoiceClient.id]];
                          newOrders[i] = { ...newOrders[i], ref: e.target.value };
                          setOrders({ ...orders, [invoiceClient.id]: newOrders });
                        }}
                      />
                      <span className="hidden print:inline">{order.ref}</span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-right">
                      <input
                        type="number"
                        className="w-24 text-right bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 print:hidden"
                        value={order.price}
                        onChange={(e) => {
                          const newOrders = [...orders[invoiceClient.id]];
                          newOrders[i] = { ...newOrders[i], price: parseInt(e.target.value) || 0 };
                          setOrders({ ...orders, [invoiceClient.id]: newOrders });
                        }}
                      />
                      <span className="hidden print:inline">{order.price.toLocaleString('fr-FR')} Ar</span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center print:hidden">
                      <div className="flex gap-2 justify-center">
                        <button
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                          onClick={async () => {
                            try {
                              await updateOrderItem(order.id, order.ref, order.price);
                              toast.success('Article mis à jour !');
                            } catch (error) {
                              console.error(error);
                            }
                          }}
                        >
                          Modifier
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 font-medium text-sm"
                          onClick={async () => {
                            try {
                              await deleteOrderItem(order.id);
                              const newOrders = orders[invoiceClient.id].filter((o) => o.id !== order.id);
                              setOrders((prev) => ({
                                ...prev,
                                [invoiceClient.id]: newOrders,
                              }));
                              toast.success('Article supprimé !');
                            } catch (error) {
                              console.error('Erreur lors de la suppression:', error);
                              toast.error('Erreur lors de la suppression de l\'article.');
                            }
                          }}
                        >
                          X
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold">
                  <td colSpan={3} className="border border-gray-300 px-3 py-2 text-right">Total :</td>
                  <td className="border border-gray-300 px-3 py-2 text-right">
                    {(orders[invoiceClient.id] || [])
                      .reduce((acc, cur) => acc + cur.price, 0)
                      .toLocaleString('fr-FR')} Ar
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="flex justify-end items-center gap-4 mt-6 print:hidden">
              <form method="dialog">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition">
                  Fermer
                </button>
              </form>
              <button className="btn btn-outline" onClick={() => window.print()}>
                🖨️ Imprimer / PDF
              </button>
            </div>
          </div>
        </dialog>
      )}
    </Wrapper>
  );
};

export default Page;