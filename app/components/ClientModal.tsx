import React from 'react'

interface Props {
    name: string,
    adress: string,
    tel : string
    loading: boolean,
    onclose: () => void,
    onChangeName: (value: string) => void,
    onChangeAdress: (value: string) => void,
    onChangeTel: (value: string) => void,
    onSubmit: () => void,
    editMode?: boolean
}

const ClientModal: React.FC<Props> = ({
    name, adress, tel, loading, onclose, onChangeName, onChangeAdress, onChangeTel, editMode, onSubmit
}) => {
    return (
        <dialog id="client_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={onclose}
                    >
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg mb-4">
                    {editMode ? "Modifier les informations sur le Client" : "Nouveau Client"}
                </h3>
                <input
                    type="text"
                    placeholder='Nom'
                    value={name}
                    onChange={(e) => onChangeName(e.target.value)}
                    className='input input-bordered w-full mb-4'
                />
                <input
                    type="text"
                    placeholder='Adresse du Client'
                    value={adress}
                    onChange={(e) => onChangeAdress(e.target.value)}
                    className='input input-bordered w-full mb-4'
                />

                  <input
                    type="text"
                    placeholder='Numéro de Téléphone'
                    value={tel}
                    onChange={(e) => onChangeTel(e.target.value)}
                    className='input input-bordered w-full mb-4'
                />

                <button
                    className='btn btn-primary'
                    onClick={onSubmit}
                    disabled={loading}
                >
                    {loading
                        ? editMode
                            ? "Modification..."
                            : "Ajout..."
                        : editMode
                            ? "Modifier"
                            : "Ajouter"
                    }
                </button>

            </div>
        </dialog>
    )
}

export default ClientModal
