"use client"
import { readClientsByLiveId, searchClients, addClientToLive, readLiveById, createClient, updateOrderItem, updateClient, getOrdersByLiveId, deleteClientFromLive, createOrderItem } from '@/app/actions'
import Wrapper from '@/app/components/Wrapper'
import { useUser } from '@clerk/nextjs'
import { Client, Live } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Pencil, Trash, PlusCircle, UserRoundPlus } from 'lucide-react'
import EmptyState from '@/app/components/EmptyState'
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import ClientModal from '@/app/components/ClientModal'
import OrderModal from '@/app/components/OrderModal'
import Image from 'next/image'





const Page = ({ params }: { params: Promise<{ liveId: string }> }) => {

//Initialisation des variables
    const { user } = useUser()
    const email = user?.primaryEmailAddress?.emailAddress as string
    const [name, setName] = useState("")
    const [adress, setAdress] = useState("")
    const [tel, setTel] = useState("")
    const [loading, setLoading] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editingClientId, setEditingClientId] = useState<string | null>(null)
    const [clients, setClients] = useState<Client[]>([])
    const [live, setLive] = useState<Live | null>(null)
   

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Client[]>([]);

  const [orders, setOrders] = useState<{
    [clientId: string]: { id: string; ref: string; price: number }[];
  }>({});

    const [selectedClientId, setSelectedClientId] = useState<string | null>(null)
    const [invoiceClient, setInvoiceClient] = useState<Client | null>(null)

    
//Récupération des paramètres


    //Clients
    const fetchClients = async () => {
        try {
            const { liveId } = await params
            if (email) {
                const fetchedClients = await readClientsByLiveId(liveId, email)
                if (fetchedClients) {
                    setClients(fetchedClients)                   
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
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
              console.error("Erreur lors du chargement des clients:", error);
            }
          };

          if (email) {
            fetchClients();
          }
 }, [email, params]); 
    //Search

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);

      if (query.length < 2) {
        setSearchResults([]);
        return;
      }

      try {
        setLoading(true);
        const results = await searchClients(query);
        setSearchResults(results);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    };


  // Handle adding a client to the live session
  const handleAddClient = async (client: Client) => {
        setLoading(true); // Start loading
        try {
          const { liveId } = await params;
          console.log('Ajout du client à la session:', { clientId: client.id, liveId });

          // Ajouter le client à la session live
          await addClientToLive(liveId, client.id);
          console.log('Client ajouté avec succès');

          // Rafraîchir la liste des clients
          await fetchClients();
          console.log('Liste des clients mise à jour');

          // Réinitialiser la recherche
       // Réinitialiser la recherche
    setSearchQuery('');
    setSearchResults([]);
    toast.success(`Client ${client.name} ajouté à la session.`);
  } catch (error: unknown) { // Remplacement de any par unknown
    console.error('Erreur lors de l’ajout du client:', error);
    // Vérification de type pour accéder à error.message
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l’ajout du client.';
    toast.error(errorMessage);
  } finally {
    setLoading(false); // Stop loading
  }
};

//Session Live

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
      console.error("Erreur lors du chargement du live:", error);
    }
  };

  if (email) {
    fetchLive();
  }
 }, [email, params]); 




  //Commandes
    // const fetchOrder = async () => {

    //            try {
    //         const { liveId } = await params
    //         if (email) {
    //             const fetchedOrder = await getOrdersByLiveId(liveId);
        
    //             if (fetchedOrder) {
    //                 setOrders(fetchedOrder)
                    
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }

    // }

 useEffect(() => {
  const fetchOrder = async () => {
    try {
      const { liveId } = await params;
      if (!email) {
        throw new Error("Email requis");
      }

      const fetchedOrder = await getOrdersByLiveId(liveId);
      if (fetchedOrder) {
        setOrders(fetchedOrder);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des commandes :", error);
    }
  };

  if (email) {
    fetchOrder();
  }
}, [email, params]);


//Ouverture et Fermeture des Modal

      const openCreateModal = () => {
            setName("");
            setAdress("");
            setTel("");
            setEditMode(false);
            (document.getElementById("client_modal") as HTMLDialogElement)?.showModal()
          }

          const closeModal = () => {
            setName("");
            setAdress("");
            setTel("");
            setEditMode(false);
            (document.getElementById("client_modal") as HTMLDialogElement)?.close()
          }


          //CRUD
 const handleCreateClient = async () => {
            setLoading(true);
            try {
              const { liveId } = await params;

              if (email && liveId) {
                await createClient(name, adress, tel, email, liveId);
              }

                await fetchClients();
              closeModal();
                toast.success("Client ajouté avec succès.");
            } catch (error) {
              console.error("Erreur création client:", error);
              toast.error("Erreur lors de l'ajout du client.");
            } finally {
              setLoading(false);
            }
          }
          
          
          const handleUpdateClient = async () => {
                if (!editingClientId) return
                setLoading(true)
                if (email) {
                  await updateClient(editingClientId, name, adress, tel, email)
                }
                await fetchClients()
                closeModal()
                setLoading(false)
                toast.success("Information Live mise à jour avec succès.")
              }


          const openOrderModal = (clientId: string) => {
            setSelectedClientId(clientId)
          }

         const openInvoiceModal = (client: Client) => {
              setInvoiceClient(client)
              const modal = document.getElementById("invoice_modal") as HTMLDialogElement
              if (modal) modal.showModal()
            }


        
              
  const handleRemoveClientFromLive = async (clientId: string) => {
          const { liveId } = await params;

          const confirmDelete = confirm("Retirer ce client de ce live ?");
          if (!confirmDelete) return;

          try {
            await deleteClientFromLive(liveId, clientId);
            await fetchClients();
            toast.success("Client retiré de ce live.");
          } catch (error) {
            toast.error("Erreur lors du retrait du client.");
            console.error(error);
          }
};

                

          const openEditModal = (client: Client) => {
                setName(client.name);
                setAdress(client.address || " ");
                setTel(client.tel || " ");
                setEditMode(true);
                setEditingClientId(client.id);
                (document.getElementById("client_modal") as HTMLDialogElement)?.showModal();
              }


             


         const handleAddOrder = async (clientId: string, ref: string, price: number) => {
              const { liveId } = await params;
                          if (!clientId || !live) return;

                          try {
                            const newOrder = await createOrderItem({
                              liveId: liveId,
                              clientId,
                              reference: ref,
                              quantity: 1, // par défaut, 1 si tu ne gères pas encore la quantité
                              unitPrice: price
                            });

                        setOrders((prev) => {
                                const currentOrders = prev[clientId] || [];
                                return {
                                  ...prev,
                                  [clientId]: [
                                    ...currentOrders,
                                    {
                                      id: newOrder.id, // 👈 important !
                                      ref: newOrder.reference,
                                      price: newOrder.unitPrice * newOrder.quantity,
                                    },
                                  ],
                                };
                              });


                            toast.success("Commande ajoutée avec succès !");
                          } catch (error) {
                            console.error(error);
                            toast.error("Erreur lors de l'ajout de la commande.");
                          } finally {
                            setSelectedClientId(null);
                          }
                        }

      const formattedDate = live?.date
            ? format(new Date(live.date), "EEEE d MMMM yyyy", { locale: fr })
            : "";


    // Impression

const handlePrint = () => {
  const content = document.getElementById('invoice-content')
  if (content) {
    const printWindow = window.open('', '', 'width=800,height=600')
    if (printWindow) {
      printWindow.document.write('<html><head><title>Facture</title>')
      printWindow.document.write('<link rel="stylesheet" href="/styles.css">') // si tu veux un style
      printWindow.document.write('</head><body >')
      printWindow.document.write(content.innerHTML)
      printWindow.document.write('</body></html>')
      printWindow.document.close()
      printWindow.print()
    }
  }
}

// const handleDownloadPdf = async () => {
//   const input = document.getElementById('invoice-content')
//   if (!input) return
//   const canvas = await html2canvas(input)
//   const imgData = canvas.toDataURL('image/png')
//   const pdf = new jsPDF()
//   const imgProps = pdf.getImageProperties(imgData)
//   const pdfWidth = pdf.internal.pageSize.getWidth()
//   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
//   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
//   pdf.save('facture.pdf')


  
// //Impression multiple
  

// }

// const generateAllInvoicesPDF = async () => {
//   const container = document.getElementById("all-invoices-container");
//   if (!container) return;

//   const pdf = new jsPDF("p", "mm", "a4");
//   const invoiceElements = Array.from(container.querySelectorAll(".single-invoice"));

//   for (let i = 0; i < invoiceElements.length; i++) {
//     const el = invoiceElements[i] as HTMLElement;
//     const canvas = await html2canvas(el);
//     const imgData = canvas.toDataURL("image/png");

//     const x = 10;
//     const y = (i % 6) * 45 + 10; // 6 factures par page (chaque ~45mm de hauteur)

//     if (i > 0 && i % 6 === 0) {
//       pdf.addPage();
//     }

//     pdf.addImage(imgData, "PNG", x, y, 190, 40);
//   }

//   pdf.save("factures.pdf");
// };

    return (
      <Wrapper>


       
        
        <div className='overflow-x-auto'>
        


        <div className='mb-4'>
                  <button className='btn btn-primary'
                     onClick={openCreateModal}
                    >
                  
                  Ajouter un Client à la Session
                  </button>
                  
                </div>
                {/* Search Bar */}
      <div className="mb-4">
  <div className="relative">
    <input
      type="text"
      className="input input-sm input-bordered w-full max-w-sm rounded-md py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Rechercher un client par nom..."
      value={searchQuery}
      onChange={handleSearch}
      disabled={loading}
    />
    {loading && (
      <span className="loading loading-spinner loading-xs absolute right-2 top-2.5 text-gray-500" />
    )}
    {searchResults.length > 0 && (
      <ul className="absolute z-20 bg-white border border-gray-300 w-full max-w-sm mt-1 max-h-60 overflow-y-auto rounded-md shadow-lg">
        {searchResults.map((client) => (
          <li
            key={client.id}
            className="p-2 text-black text-base hover:bg-gray-100 cursor-pointer"
            onClick={() => handleAddClient(client)}
          >
            {client.name} {client.tel && `(${client.tel})`}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
        
        
        {clients.length === 0 ? (
                            <div>
                                <EmptyState
                                    message='Pas encore de Client'
                                    IconComponent="User"
                                />
                            </div>
                        ) : (


                          
                            <table className='table'>
                              
                                <thead>

                                   <tr>
                                        <th colSpan={8} className="text-xl font-bold text-center py-4">
                                             {live ? `${live.name} — ${formattedDate}` : "Détails du Live"}
                                        </th>

                                      
                                     </tr>
                                    <tr>
                                        <th></th>
                                        <th>Nom</th>
                                        <th>Adresse</th>
                                        <th>Contact</th>
                                        <th>Articles</th>
                                        <th>Total</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client, index) => (
                                        <tr key={client.id}>
                                            <th>{index + 1}</th>
                                            <td>
                                             {client.name}
                                            </td>
                                            <td>
                                             {client.address}
                                            </td>
                                            <td>
                                             {client.tel}
                                            </td>
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

                                              <td className="font-semibold">
                                                {(orders[client.id] || []).reduce((acc, cur) => acc + cur.price, 0)} Ar
                                              </td>
                                              
                                            <td className='capitalize'>
                                              
                                            </td>
                                            <td>
                                               
                                            </td>
                                            <td className='flex gap-2 flex-col'>
                                               <div className='flex gap-2'>
                                                                <button className='btn btn-sm btn-success' title='Ajouter Article' onClick={() => openOrderModal(client.id)}>
                                                                        <PlusCircle className='w-4 h-4' />
                                                                </button>
                                                                <button className='btn btn-sm'  title='Modifier Client' onClick={() => openEditModal(client)} >
                                                                  <Pencil className='w-4 h-4' />
                                                                </button>

                                                                <button className="btn btn-sm btn-info" title='Facture' onClick={() => openInvoiceModal(client)}>
  📄
                                                                </button>

                                                                <button className='btn btn-sm btn-error' title='Supprimer' onClick={() => handleRemoveClientFromLive(client.id)} >
                                                                  <Trash className='w-4 h-4' />
                                                                </button>
                                                              </div>
                                            </td>

                              
                                        </tr>
                                                            
 
                                        

                                        
                                    ))}

                                <tr className="border-t">
                                    <td colSpan={5} className="text-right pr-4">
                                      <span className="text-lg font-bold text-green-600">Total général :</span>
                                    </td>
                                    <td>
                                      <span className="text-lg font-bold text-green-600">
                                        {Object.values(orders).flat().reduce((sum, item) => sum + item.price, 0)} Ar
                                      </span>
                                    </td>
                                    <td> 
                           
                                    </td>



                                    
                                  </tr>
                                  <tr className='mb-4'>
                                      
                                    
                                                 
                                                  
                                          
                          
                                  </tr>



                                </tbody>
                      
                            </table>
                            
                         

                            
                        )}
        
        
            </div>

          <div className='mb-4'>
                  <button className='btn btn-primary'
                     onClick={openCreateModal}
                    >
                  
                      <UserRoundPlus className='w-12 h-12' />
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
                                                {/* En-tête logo + nom association */}
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
                                                  <p><strong>Adresse :</strong> {invoiceClient.address || "N/A"}</p>
                                                  <p><strong>Téléphone :</strong> {invoiceClient.tel || "N/A"}</p>
                                                  <p><strong>Date :</strong> {live?.date ? format(new Date(live.date), "dd/MM/yyyy") : "N/A"}</p>
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
          <span className="hidden print:inline">{order.price.toLocaleString("fr-FR")} Ar</span>
        </td>
        <td className="border border-gray-300 px-3 py-2 text-center print:hidden">
          <button
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            onClick={async () => {
              try {
                await updateOrderItem(order.id, order.ref, order.price);
                toast.success("Article mis à jour !");
              } catch (error) {
                 console.error(error);
              }
            }}
          >
            Modifier
          </button>
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
                                                   <button className="btn btn-outline hidden" onClick={() => handlePrint()}>
                                                  cacher
                                                  </button>
                                              </div>

                                              </div>
                                            </dialog>
                                          )}




        
            </Wrapper>
    )
}

export default Page
