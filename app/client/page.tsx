"use client"
import { readAllClients, updateClient, deleteClient } from '@/app/actions'
import { useUser } from '@clerk/nextjs'
import { Client } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { Pencil, Trash } from 'lucide-react'
import ClientModal from '@/app/components/ClientModal'
import { toast } from 'react-toastify'
import Wrapper from '@/app/components/Wrapper'

const ITEMS_PER_PAGE = 10

const AllClientsPage = () => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string

  const [clients, setClients] = useState<Client[]>([])
  const [name, setName] = useState("")
  const [adress, setAdress] = useState("")
  const [tel, setTel] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editingClientId, setEditingClientId] = useState<string | null>(null)

  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const fetchClients = async () => {
    try {
      if (email) {
        const allClients = await readAllClients(email)
        if (allClients) {
          setClients(allClients)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [email])

  const openEditModal = (client: Client) => {
    setName(client.name)
    setAdress(client.address || "")
    setTel(client.tel || "")
    setEditingClientId(client.id)
    setEditMode(true)
    ;(document.getElementById("client_modal") as HTMLDialogElement)?.showModal()
  }

  const handleUpdateClient = async () => {
    if (!editingClientId || !email) return
    setLoading(true)
    await updateClient(editingClientId, name, adress, tel, email)
    toast.success("Client mis à jour.")
    await fetchClients()
    setLoading(false)
    ;(document.getElementById("client_modal") as HTMLDialogElement)?.close()
  }

  const handleDeleteClient = async (id: string) => {
    const confirm = window.confirm("Supprimer ce client définitivement ?")
    if (!confirm) return
    try {
      await deleteClient(id, email)
      toast.success("Client supprimé.")
      await fetchClients()
    } catch (error) {
      toast.error("Erreur lors du retrait du client.")
      console.error(error)
    }
  }

  // Filtrage + pagination
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(search.toLowerCase())
  )
  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE)
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

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
            setSearch(e.target.value)
            setCurrentPage(1)
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
              className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-ghost"}`}
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
          onclose={() => (document.getElementById("client_modal") as HTMLDialogElement)?.close()}
          onChangeName={setName}
          onChangeAdress={setAdress}
          onChangeTel={setTel}
          onSubmit={handleUpdateClient}
          editMode={editMode}
        />
      </div>
    </Wrapper>
  )
}

export default AllClientsPage
