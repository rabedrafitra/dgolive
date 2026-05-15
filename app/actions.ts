"use server"

import prisma from "./lib/prisma"
// import { FormDataType, Product, ProductOverviewStats, StockSummary, Transaction } from "@/type"
import {  Live, Client, Operation } from "@prisma/client"
import { startOfMonth, endOfMonth } from 'date-fns';



interface StatLive {
  clientCount: number; // Remplace totalProducts et stock normal
  liveSessionCount: number; // Remplace totalCategories (sessions live par mois)
  totalRevenue: number; // Remplace totalCategories (revenu par mois)
  orderCount: number; // Remplace totalTransactions
}

export async function checkAndAddAssociation(email: string, name: string) {
    if (!email) return
    try {
        const existingAssociation = await prisma.association.findUnique({
            where: {
                email
            }
        })
        if (!existingAssociation && name) {
            await prisma.association.create({
                data: {
                    email, name
                }
            })
        }

    } catch (error) {
        console.error(error)
    }
}

export async function getAssociation(email: string) {
    if (!email) return
    try {
        const existingAssociation = await prisma.association.findUnique({
            where: {
                email
            }
        })
        return existingAssociation
    } catch (error) {
        console.error(error)
    }
}




export async function createLive(
    name: string,
    email: string,
    description?: string,
    purchasePrice?: number
) {

    if (!name) return
    try {

        const association = await getAssociation(email)
        if (!association) {
            throw new Error("Aucune association trouvée avec cet email.");
        }
        await prisma.live.create({
            data: {
                name,
                purchasePrice: purchasePrice ?? null,
                description: description || "",
                associationId: association.id,
                date: new Date() 
            }
        })

    } catch (error) {
        console.error(error)
    }
}




// export async function readLives(email: string) {
//   if (!email) {
//     throw new Error("l'email de l'association est requis");
//   }

//   try {
//     const association = await getAssociation(email);

//     if (!association) {
//       throw new Error("Aucune association trouvée avec cet email.");
//     }

//     const lives = await prisma.live.findMany({
//       where: {
//         associationId: association.id,
//       },
//       include: {
//         liveClients: {
//           include: {
//             orderItems: true,
//           },
//         },
//       },
//       orderBy: {
//         date: 'desc',
//       },
//     });

//     return lives.map((live) => {
//       const allOrderItems = live.liveClients.flatMap(
//         (lc) => lc.orderItems
//       );

//       return {
//         ...live,
//         totalClients: live.liveClients.length,
//         totalArticles: allOrderItems.length,
//         totalAmount: allOrderItems.reduce(
//           (sum, item) => sum + item.quantity * item.unitPrice,
//           0
//         ),
//       };
//     });

//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

export async function readLives(email: string, date: Date = new Date()) {
  if (!email) {
    throw new Error("l'email de l'association est requis");
  }

  try {
    const association = await getAssociation(email);

    if (!association) {
      throw new Error("Aucune association trouvée avec cet email.");
    }

    const start = startOfMonth(date);
    const end = endOfMonth(date);

    const lives = await prisma.live.findMany({
      where: {
        associationId: association.id,
        date: {
          gte: start,
          lte: end, // 👈 filtre mois
        },
      },
      include: {
        liveClients: {
          include: {
            orderItems: true,
          },
        },
      },
      orderBy: {
        date: "desc",
      },
    });

    return lives.map((live) => {
      const allOrderItems = live.liveClients.flatMap(
        (lc) => lc.orderItems
      );

      return {
        ...live,
        totalClients: live.liveClients.length,
        totalArticles: allOrderItems.length,
        totalAmount: allOrderItems.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0
        ),
      };
    });

  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function deleteLive(id: string, email: string) {
    if (!id || !email) {
        throw new Error("L'id, l'email de l'association et sont requis.")
    }

    try {
        const association = await getAssociation(email)
        if (!association) {
            throw new Error("Aucune association trouvée avec cet email.");
        }

        await prisma.live.delete({
            where: {
                id: id,
                associationId: association.id
            }
            
        })
    } catch (error) {
        console.error(error)
    }
}

export async function readClientsByLiveId(
  liveId: string,
  email: string
): Promise<Client[] | undefined> {
  if (!email) {
    throw new Error("L'email de l'association est requis.");
  }

  try {
    const association = await getAssociation(email);
    if (!association) {
      throw new Error("Aucune association trouvée avec cet email.");
    }

    const liveClients = await prisma.liveClient.findMany({
      where: {
        liveId,
        client: {
          associationId: association.id,
        },
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            address: true,
            tel: true,
            associationId: true,
            createdAt: true,
            
          },
        },
      },
      orderBy: {
        createdAt: 'asc', // Trier par createdAt de LiveClient (date d'ajout à la session)
      },
    });

    const clients = liveClients.map((lc) => ({
      id: lc.client.id,
      name: lc.client.name,
      address: lc.client.address || '',
      tel: lc.client.tel || '',
      associationId: lc.client.associationId,
      createdAt: lc.client.createdAt,
     
    }));

    console.log('Clients triés par date d\'ajout à la session:', clients);
    return clients;
  } catch (error) {
    console.error("Erreur lors de la récupération des clients du live :", error);
    throw error; // Relancer l'erreur pour la gérer dans l'appelant
  }
}
export async function readLiveById(liveId: string, email: string): Promise<Live | undefined> {
  if (!email) {
    throw new Error("L'email de l'association est requis.");
  }

  try {
    const association = await getAssociation(email);
    if (!association) {
      throw new Error("Aucune association trouvée avec cet email.");
    }

    const live = await prisma.live.findFirst({
      where: {
        id: liveId,
        associationId: association.id,
      },
    });

    return live || undefined;

  } catch (error) {
    console.error("Erreur lors de la récupération du live :", error);
  }
}

export async function updateLive(
    id: string,
    email: string,
    name: string,
    description?: string,
    purchasePrice?: number
) {

    if (!id || !email || !name) {
        throw new Error("L'id, l'email de l'association et le nom de la catégorie sont requis pour la mise à jour.")
    }

    try {
        const association = await getAssociation(email)
        if (!association) {
            throw new Error("Aucune association trouvée avec cet email.");
        }

        await prisma.live.update({
            where: {
                id: id,
                associationId: association.id
            },
            data: {
                name,
                description: description || "",
                purchasePrice: purchasePrice ?? null,
            }
        })

    } catch (error) {
        console.error(error)
    }
}


export async function createClient(
  name: string,
  address: string,
  tel: string,
  email: string,
  liveId: string
) {
  if (!email) {
    throw new Error("L'email de l'association est requis");
  }

  try {
    const association = await getAssociation(email);
    if (!association) {
      throw new Error("Aucune association trouvée avec cet email.");
    }

    // ➕ Création du client
    const newClient = await prisma.client.create({
      data: {
        name,
        address,
        tel,
        associationId: association.id,
      },
    });

    // 🔗 Lier ce client au live via LiveClient
    await prisma.liveClient.create({
      data: {
        clientId: newClient.id,
        liveId,
      },
    });

    return newClient;
  } catch (error) {
    console.error("Erreur lors de la création du client :", error);
    throw error;
  }
}


export async function updateClient(
  clientId: string,
  name: string,
  address: string,
  tel: string,
  email: string
) {
  if (!email) {
    throw new Error("L'email de l'association est requis");
  }

  try {
    // Vérifie si le client appartient bien à l'association liée à l'email
    const client = await prisma.client.findUnique({
      where: { id: clientId },
      include: { association: true },
    });

    if (!client) {
      throw new Error("Client introuvable.");
    }

    if (client.association?.email !== email) {
      throw new Error("Ce client n'appartient pas à votre association.");
    }

    // Mise à jour
    const updatedClient = await prisma.client.update({
      where: { id: clientId },
      data: {
        name,
        address,
        tel,
      },
    });

    return updatedClient;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du client :", error);
    throw error;
  }
}


export async function deleteClient(clientId: string, email: string) {
  if (!email) {
    throw new Error("L'email de l'association est requis.");
  }

  try {
    const client = await prisma.client.findUnique({
      where: { id: clientId },
      include: { association: true },
    });

    if (!client) {
      throw new Error("Client introuvable.");
    }

    if (client.association?.email !== email) {
      throw new Error("Ce client n'appartient pas à votre association.");
    }

    // Supprime le client
    await prisma.client.delete({
      where: { id: clientId },
    });

    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression du client :", error);
    throw error;
  }
}


export async function deleteClientFromLive(liveId: string, clientId: string) {
  try {
    await prisma.liveClient.delete({
      where: {
        liveId_clientId: {
          liveId,
          clientId
        }
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Erreur lors de la suppression du client du live :", error);
    throw new Error("Impossible de supprimer ce client du live.");
  }
}


export async function createOrderItem({
  liveId,
  clientId,
  reference,
  quantity,
  unitPrice,
}: {
  liveId: string;
  clientId: string;
  reference: string;
  quantity: number;
  unitPrice: number;
  isDeliveredAndPaid: false, // Ajout
}) {
  try {
    // Trouver le liveClient (relation)
    const liveClient = await prisma.liveClient.findUnique({
      where: {
        liveId_clientId: {
          liveId,
          clientId,
        },
      },
    });

    if (!liveClient) {
      console.error("LiveClient non trouvé pour liveId:", liveId, "et clientId:", clientId);
      throw new Error("Aucune relation trouvée pour ce client dans ce live.");
    }

    // Créer la commande
    const orderItem = await prisma.orderItem.create({
      data: {
        liveClient: {
          connect: {
            id: liveClient.id,
          },
        },
        reference,
        quantity,
        unitPrice,
      },
    });

    // Recalcul du total
    const orderItems = await prisma.orderItem.findMany({
      where: {
        liveClientId: liveClient.id,
      },
    });

    const totalFacture = orderItems.reduce((sum, item) => {
      return sum + item.quantity * item.unitPrice;
    }, 0);

    // Mettre à jour totalFacture dans LiveClient
    await prisma.liveClient.update({
      where: {
        id: liveClient.id,
      },
      data: {
        totalFacture,
      },
    });

    return orderItem;
  } catch (error) {
    console.error("Erreur lors de la création de la commande :", error);
    throw new Error("Impossible d'ajouter cette commande.");
  }
}



export async function getOrdersByLiveId(liveId: string) {
  try {
    // Récupérer tous les liveClients associés au live
    const liveClients = await prisma.liveClient.findMany({
      where: {
        liveId,
      },
      include: {
        orderItems: true, // Inclure les orderItems associés à chaque liveClient
      },
    });

    // Formater les données pour correspondre à la structure de l'état orders
    const ordersByClient = liveClients.reduce((acc, liveClient) => {
      if (liveClient.orderItems.length > 0) {
        acc[liveClient.clientId] = liveClient.orderItems.map((order) => ({
          id: order.id,
          ref: order.reference,
          price: order.quantity * order.unitPrice,
          isDeliveredAndPaid: order.isDeliveredAndPaid, // Ajout du champ
        }));
      }
      return acc;
    }, {} as Record<string, { id: string; ref: string; price: number; isDeliveredAndPaid: boolean }[]>);

    return ordersByClient;
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes :", error);
    throw new Error("Impossible de charger les commandes.");
  }
}

export async function readAllClients(email: string) {
  if (!email) {
    throw new Error("L'email de l'association est requis");
  }

  try {
    const association = await getAssociation(email);
    if (!association) {
      throw new Error("Aucune association trouvée avec cet email.");
    }

    const clients = await prisma.client.findMany({
      where: {
        associationId: association.id,
      },
      
      orderBy: {
        name: "asc", // Trie alphabétique par nom
      },
    });

    return clients;
  } catch (error) {
    console.error("Erreur lors de la récupération des clients :", error);
  }
}


export async function deleteOrderItem(orderId: string) {
  if (!orderId) {
    throw new Error("L'ID de l'article est requis pour la suppression.");
  }

  try {
    await prisma.orderItem.delete({
      where: { id: orderId },
    });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    throw new Error("La suppression a échoué.");
  }
}


export async function updateOrderItem(id: string, reference: string, price: number) {
  if (!id || reference === undefined || price === undefined) {
    throw new Error("L'id, la référence et le prix sont requis.");
  }

  try {
    await prisma.orderItem.update({
      where: { id },
      data: {
        reference: reference, // ✅ ou juste reference si la variable est déclarée au-dessus
        unitPrice: price,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    throw new Error("Échec de la mise à jour.");
  }
}



export async function searchClients(query: string) {
  try {
    const clients = await prisma.client.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive', // 🔥 Rend la recherche insensible à la casse pour PostgreSQL
        },
      },
      select: {
        id: true,
        name: true,
        address: true,
        tel: true,
        associationId: true,
        createdAt: true,
      },
      take: 10,
    });
    return clients;
  } catch (error) {
    console.error('Erreur lors de la recherche des clients :', error);
    throw new Error('Impossible de rechercher les clients.');
  }
}



export async function addClientToLive(liveId: string, clientId: string) {
  try {
    // Check if the client is already linked to the live
    const existingLiveClient = await prisma.liveClient.findUnique({
      where: {
        liveId_clientId: {
          liveId,
          clientId,
        },
      },
    });

    if (existingLiveClient) {
      throw new Error('Ce client est déjà ajouté à cette session.');
    }

    // Create a new LiveClient record
    const liveClient = await prisma.liveClient.create({
      data: {
        liveId,
        clientId,
        totalFacture: 0,
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            address: true,
            tel: true,
          },
        },
      },
    });

    return liveClient;
  } catch (error) {
    console.error('Erreur lors de l’ajout du client à la session :', error);
    throw error;
  }
}

export async function getStatLive(email: string): Promise<StatLive> {
  try {
    if (!email) {
      throw new Error("L'email est requis.");
    }

    const association = await getAssociation(email);
    if (!association) {
      throw new Error("Aucune association trouvée avec cet email.");
    }

    // Définir la plage de dates pour le mois courant
    const now = new Date();
    const start = startOfMonth(now);
    const end = endOfMonth(now);

    // Nombre total de clients
    const clientCount = await prisma.client.count({
      where: {
        associationId: association.id,
      },
    });

    // Nombre de sessions live pour le mois courant
    const liveSessionCount = await prisma.live.count({
      where: {
        associationId: association.id,
        createdAt: {
          gte: start,
          lte: end,
        },
      },
    });

    // Total des revenus (somme de totalFacture) pour le mois courant
    const revenueResult = await prisma.liveClient.aggregate({
      where: {
        live: {
          associationId: association.id,
        },
        createdAt: {
          gte: start,
          lte: end,
        },
      },
      _sum: {
        totalFacture: true,
      },
    });
    const totalRevenue = revenueResult._sum.totalFacture || 0;

    // Nombre de commandes (LiveClient) pour le mois courant
    const orderCount = await prisma.liveClient.count({
      where: {
        live: {
          associationId: association.id,
        },
        createdAt: {
          gte: start,
          lte: end,
        },
      },
    });

    return {
      clientCount,
      liveSessionCount,
      totalRevenue,
      orderCount,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques live :', error);
    return {
      clientCount: 0,
      liveSessionCount: 0,
      totalRevenue: 0,
      orderCount: 0,
    };
  }
}

export async function getAllOrdersByClientId(clientId: string, email: string) {
    if (!email || !clientId) {
        throw new Error("L'email de l'association et l'ID du client sont requis.");
    }
    try {
        const association = await getAssociation(email);
        if (!association) {
            throw new Error("Aucune association trouvée avec cet email.");
        }
        const liveClients = await prisma.liveClient.findMany({
            where: {
                clientId,
                live: { associationId: association.id }
            },
            include: {
                orderItems: true,
                live: { select: { date: true } }
            }
        });
        const orders = liveClients.flatMap(liveClient =>
            liveClient.orderItems.map(order => ({
                id: order.id,
                reference: order.reference,
                unitPrice: order.unitPrice,
                quantity: order.quantity,
                liveDate: liveClient.live?.date || null
            }))
        );
        return orders;
    } catch (error) {
        console.error("Erreur lors de la récupération des commandes du client :", error);
        throw new Error("Impossible de charger les commandes du client.");
    }
}

export async function updateOrderItemStatus(orderId: string, isDeliveredAndPaid: boolean) {
  try {
    await prisma.orderItem.update({
      where: { id: orderId },
      data: { isDeliveredAndPaid },
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut de la commande:', error);
    throw new Error('Impossible de mettre à jour le statut de la commande.');
  }
}


export async function handleCheckboxChange(
  clientId: string,
  orderId: string,
  checked: boolean,
  orders: Record<string, { id: string; ref: string; price: number; isDeliveredAndPaid: boolean }[]>
) {
  // Validation des paramètres
  if (!clientId || !orderId) {
    console.error('Erreur: clientId ou orderId manquant', { clientId, orderId });
    return orders; // Retourne l'état inchangé en cas d'erreur
  }

  // Vérifier si la commande existe
  const clientOrders = orders[clientId] || [];
  const orderExists = clientOrders.some(
    (order: { id: string; ref: string; price: number; isDeliveredAndPaid: boolean }) => order.id === orderId
  );
  if (!orderExists) {
    console.error('Erreur: commande non trouvée', { clientId, orderId });
    return orders; // Retourne l'état inchangé
  }

  try {
    // Mettre à jour la base de données
    await updateOrderItemStatus(orderId, checked);

    // Mettre à jour les données localement
    const updatedOrders = clientOrders.map(
      (order: { id: string; ref: string; price: number; isDeliveredAndPaid: boolean }) =>
        order.id === orderId ? { ...order, isDeliveredAndPaid: checked } : order
    );

    console.log('Statut de la commande mis à jour !');
    return { ...orders, [clientId]: updatedOrders };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut de la commande:', {
      error,
      clientId,
      orderId,
      checked,
    });
    return orders; // Retourne l'état inchangé en cas d'erreur
  }
}



export async function createOperation(
  email: string,
  operationType: string,
  amount: number,
  reason?: string
): Promise<void> {
  try {
    const association = await getAssociation(email);
    if (!association) {
      throw new Error('Aucune association trouvée pour cet email.');
    }
    await prisma.$transaction(async (tx) => {
      await tx.operation.create({
        data: {
          operationType,
          amount,
          reason,
          associationId: association.id,
        },
      });
      await tx.association.update({
        where: { id: association.id },
        data: {
          balance: {
            increment: amount,
          },
        },
      });
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'opération :', error);
    throw new Error('Impossible de créer l\'opération');
  }
}

export async function readOperations(email: string): Promise<{
  operations: Operation[];
  balance: number;
}> {
  try {
    const association = await getAssociation(email);
    if (!association) {
      throw new Error(`Aucune association trouvée pour l'email : ${email}`);
    }
    const operations = await prisma.operation.findMany({
      where: { associationId: association.id },
      orderBy: { createdAt: 'desc' },
    });

    return {
      operations,
      balance: association.balance,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des opérations :', error);
    throw new Error('Impossible de récupérer les opérations');
  }
}



