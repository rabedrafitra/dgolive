"use server"

import prisma from "./lib/prisma"
// import { FormDataType, Product, ProductOverviewStats, StockSummary, Transaction } from "@/type"
import {  Live, Client } from "@prisma/client"
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

// export async function createCategory(
//     name: string,
//     email: string,
//     description?: string
// ) {

//     if (!name) return
//     try {

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }
//         await prisma.category.create({
//             data: {
//                 name,
//                 description: description || "",
//                 associationId: association.id
//             }
//         })

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function updateCategory(
//     id: string,
//     email: string,
//     name: string,
//     description?: string,
// ) {

//     if (!id || !email || !name) {
//         throw new Error("L'id, l'email de l'association et le nom de la catégorie sont requis pour la mise à jour.")
//     }

//     try {
//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         await prisma.category.update({
//             where: {
//                 id: id,
//                 associationId: association.id
//             },
//             data: {
//                 name,
//                 description: description || "",
//             }
//         })

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function deleteCategory(id: string, email: string) {
//     if (!id || !email) {
//         throw new Error("L'id, l'email de l'association et sont requis.")
//     }

//     try {
//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         await prisma.category.delete({
//             where: {
//                 id: id,
//                 associationId: association.id
//             }
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }


// export async function createProduct(formData: FormDataType, email: string) {
//     try {
//         const { name, description, price, imageUrl, categoryId, unit } = formData;
//         if (!email || !price || !categoryId || !email) {
//             throw new Error("Le nom, le prix, la catégorie et l'email de l'association sont requis pour la création du produit.")
//         }
//         const safeImageUrl = imageUrl || ""
//         const safeUnit = unit || ""

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         await prisma.product.create({
//             data: {
//                 name,
//                 description,
//                 price: Number(price),
//                 imageUrl: safeImageUrl,
//                 categoryId,
//                 unit: safeUnit,
//                 associationId: association.id
//             }
//         })

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function updateProduct(formData: FormDataType, email: string) {
//     try {
//         const { id, name, description, price, imageUrl } = formData;
//         if (!email || !price || !id || !email) {
//             throw new Error("L'id, le nom, le prix et l'email sont requis pour la mise à jour du produit.")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         await prisma.product.update({
//             where: {
//                 id: id,
//                 associationId: association.id
//             },
//             data: {
//                 name,
//                 description,
//                 price: Number(price),
//                 imageUrl: imageUrl,
//             }
//         })

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function deleteProduct(id: string, email: string) {
//     try {
//         if (!id) {
//             throw new Error("L'id est  requis pour la suppression.")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         await prisma.product.delete({
//             where: {
//                 id: id,
//                 associationId: association.id
//             }
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function readProducts(email: string): Promise<Product[] | undefined> {
//     try {
//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         const products = await prisma.product.findMany({
//             where: {
//                 associationId: association.id
//             },
//             include: {
//                 category: true
//             }
//         })

//         return products.map(product => ({
//             ...product,
//             categoryName: product.category?.name
//         }))

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function readProductById(productId: string, email: string): Promise<Product | undefined> {
//     try {
//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         const product = await prisma.product.findUnique({
//             where: {
//                 id: productId,
//                 associationId: association.id
//             },
//             include: {
//                 category: true
//             }
//         })
//         if (!product) {
//             return undefined
//         }

//         return {
//             ...product,
//             categoryName: product.category?.name
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }


// export async function replenishStockWithTransaction(productId: string, quantity: number, email: string) {
//     try {

//         if (quantity <= 0) {
//             throw new Error("La quantité à ajouter doit être supérieure à zéro.")
//         }

//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         await prisma.product.update({
//             where: {
//                 id: productId,
//                 associationId: association.id
//             },
//             data: {
//                 quantity: {
//                     increment: quantity
//                 }
//             }
//         })

//         await prisma.transaction.create({
//             data: {
//                 type: "IN",
//                 quantity: quantity,
//                 productId: productId,
//                 associationId: association.id
//             }
//         })

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function deductStockWithTransaction(orderItems: OrderItem[], email: string) {
//     try {

//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         for (const item of orderItems) {
//             const product = await prisma.product.findUnique({
//                 where: { id: item.productId }
//             })

//             if (!product) {
//                 throw new Error(`Produit avec l'ID ${item.productId} introuvable.`)
//             }

//             if (item.quantity <= 0) {
//                 throw new Error(`La quantité demandée pour "${product.name}" doit être supérieure à zéro.`)
//             }

//             if (product.quantity < item.quantity) {
//                 throw new Error(`Le produit "${product.name}" n'a pas assez de stock. Demandé: ${item.quantity}, Disponible: ${product.quantity} / ${product.unit}.`)
//             }
//         }

//         await prisma.$transaction(async (tx) => {
//             for (const item of orderItems) {
//                 await tx.product.update({
//                     where: {
//                         id: item.productId,
//                         associationId: association.id
//                     },
//                     data: {
//                         quantity: {
//                             decrement: item.quantity,
//                         }
//                     }
//                 });
//                 await tx.transaction.create({
//                     data: {
//                         type: "OUT",
//                         quantity: item.quantity,
//                         productId: item.productId,
//                         associationId: association.id
//                     }
//                 })
//             }

//         })

//         return { success: true }
//     } catch (error) {
//         console.error(error)
//         return { success: false, message: error }
//     }
// }

// export async function getTransactions(email: string, limit?: number): Promise<Transaction[]> {
//     try {
//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         const transactions = await prisma.transaction.findMany({
//             where: {
//                 associationId: association.id
//             },
//             orderBy: {
//                 createdAt: "desc"
//             },
//             take: limit,
//             include: {
//                 product: {
//                     include: {
//                         category: true
//                     }
//                 }
//             }
//         })

//         return transactions.map((tx) => ({
//             ...tx,
//             categoryName: tx.product.category.name,
//             productName: tx.product.name,
//             imageUrl: tx.product.imageUrl,
//             price: tx.product.price,
//             unit: tx.product.unit,
//         }))
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// }

// export async function getProductOverviewStats(email: string): Promise<ProductOverviewStats> {
//     try {
//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         const products = await prisma.product.findMany({
//             where: {
//                 associationId: association.id
//             },
//             orderBy: {
//                 createdAt: "desc"
//             },
//             include: {
//                 category: true
//             }
//         })

//         const transactions = await prisma.transaction.findMany(
//             {
//                 where: {
//                     associationId: association.id
//                 },
//             }
//         )

//         const categoriesSet = new Set(products.map((product) => product.category.name))

//         const totalProducts = products.length
//         const totalCategories = categoriesSet.size
//         const totalTransactions = transactions.length
//         const stockValue = products.reduce((acc, product) => {
//             return acc + product.price * product.quantity
//         }, 0)

//         return {
//             totalProducts,
//             totalCategories,
//             totalTransactions,
//             stockValue,
//         }
//     } catch (error) {
//         console.error(error)

//         return {
//             totalProducts: 0,
//             totalCategories: 0,
//             totalTransactions: 0,
//             stockValue: 0,
//         }
//     }
// }

// export async function getProductCategoryDistribution(email: string) {
//     try {
//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         const R = 5

//         const categoriesWithProductCount = await prisma.category.findMany({
//             where: {
//                 associationId: association.id
//             },
//             include: {
//                 products: {
//                     select: {
//                         id: true
//                     }
//                 }
//             }
//         })

//         const data = categoriesWithProductCount
//             .map((category) => (
//                 {
//                     name: category.name,
//                     value: category.products.length
//                 }
//             ))
//             .sort((a, b) => b.value - a.value)
//             .slice(0, R)

//         return data

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function getStockSummary(email: string): Promise<StockSummary> {
//     try {
//         if (!email) {
//             throw new Error("l'email est requis .")
//         }

//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }


//         const allProducts = await prisma.product.findMany({
//             where: {
//                 associationId: association.id
//             },
//             include: {
//                 category: true
//             }
//         })

//         const inStock = allProducts.filter((p) => p.quantity > 5)
//         const lowStock = allProducts.filter((p) => p.quantity > 0 && p.quantity <= 0)
//         const outOfStock = allProducts.filter((p) => p.quantity === 0)
//         const criticalProducts = [...lowStock, ...outOfStock]
//         return {
//             inStockCount: inStock.length,
//             lowStockCount: lowStock.length,
//             outOfStockCount: outOfStock.length,
//             criticalProducts: criticalProducts.map((p) => ({
//                 ...p,
//                 categoryName: p.category.name
//             }))
//         }

//     } catch (error) {
//         console.error(error)

//         return {
//             inStockCount: 0,
//             lowStockCount: 0,
//             outOfStockCount: 0,
//             criticalProducts: []
//         }
//     }
// }





//Live function

// export async function readCategories(email: string): Promise<Category[] | undefined> {
//     if (!email) {
//         throw new Error("l'email de l'association est  requis")
//     }

//     try {
//         const association = await getAssociation(email)
//         if (!association) {
//             throw new Error("Aucune association trouvée avec cet email.");
//         }

//         const categories = await prisma.category.findMany({
//             where: {
//                 associationId: association.id
//             }
//         })
//         return categories
//     } catch (error) {
//         console.error(error)
//     }
// }


export async function createLive(
    name: string,
    email: string,
    description?: string
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
                description: description || "",
                associationId: association.id,
                date: new Date() 
            }
        })

    } catch (error) {
        console.error(error)
    }
}

export async function readLives(email: string): Promise<Live[] | undefined> {
    if (!email) {
        throw new Error("l'email de l'association est  requis")
    }

    try {
        const association = await getAssociation(email)
        if (!association) {
            throw new Error("Aucune association trouvée avec cet email.");
        }

        const lives = await prisma.live.findMany({
            where: {
                associationId: association.id
            },
              orderBy: {
                date: 'desc' // Trie par date décroissante : la plus récente en premier
            }
        })
        return lives
    } catch (error) {
        console.error(error)
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
          id : order.id,
          ref: order.reference,
          price: order.quantity * order.unitPrice,
        }));
      }
      return acc;
    }, {} as Record<string, { id: string; ref: string; price: number }[]>);

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