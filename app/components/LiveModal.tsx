import React from 'react';

interface Props {
  name: string;
  description: string;
  purchasePrice: number | undefined; // Changement ici
  loading: boolean;
  onclose: () => void;
  onChangeName: (value: string) => void;
  onChangeDescription: (value: string) => void;
  onChangePurchasePrice: (value: number | undefined) => void; // Changement ici
  onSubmit: () => void;
  editMode?: boolean;
}

const LiveModal: React.FC<Props> = ({
  name,
  description,
  purchasePrice,
  loading,
  onclose,
  onChangeName,
  onChangeDescription,
  onChangePurchasePrice,
  onSubmit,
  editMode,
}) => {
  return (
    <dialog id="live_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onclose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4">
          {editMode ? 'Modifier les informations de la Session' : 'Nouvelle Session'}
        </h3>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          className="input input-bordered w-full mb-4"
          disabled={loading}
        />
        
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => onChangeDescription(e.target.value)}
          className="input input-bordered w-full mb-4"
          disabled={loading}
        />

        <input
          type="number"
          placeholder="Prix d'achat (Ar)"
          value={purchasePrice ?? ''} // Utiliser ?? pour gérer undefined
          onChange={(e) => onChangePurchasePrice(e.target.value ? Number(e.target.value) : undefined)}
          className="input input-bordered w-full mb-4"
          disabled={loading}
          min="0"
        />
        <button
          className="btn btn-primary"
          onClick={onSubmit}
          disabled={loading || !name}
        >
          {loading
            ? editMode
              ? 'Modification...'
              : 'Ajout...'
            : editMode
              ? 'Modifier'
              : 'Ajouter'}
        </button>
      </div>
    </dialog>
  );
};

export default LiveModal;