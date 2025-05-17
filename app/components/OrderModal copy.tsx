import { Client } from '@prisma/client';
import { useState } from 'react';

// interface Props {
//   clientId: string,
//   onAddOrder: (clientId: string, ref: string, price: number) => void,
//   onClose: () => void,
// }


interface Props {
  clientId: string;
  client: Client | undefined;
  liveDate: string | null;
  onAddOrder: (clientId: string, ref: string, price: number) => void;
  onClose: () => void;
}


const OrderModal: React.FC<Props> = ({ clientId, onAddOrder, onClose }) => {
  const [ref, setRef] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!ref || !price) return
    setLoading(true)
    onAddOrder(clientId, ref, parseFloat(price))
    setRef('')
    setPrice('')
    setLoading(false)
    onClose()
  }

  return (
    <dialog id="order_modal" className="modal" open>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4">Ajouter un Article</h3>
        <input
          type="text"
          placeholder="Référence de l'article"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={loading || !ref || !price}
        >
          {loading ? 'Ajout...' : 'Ajouter'}
        </button>
      </div>
    </dialog>
  )
}

export default OrderModal