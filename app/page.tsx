'use client';

import { useUser } from '@clerk/nextjs';
import Wrapper from './components/Wrapper';
import ProductOverview from './components/ProductOverview';
import ProfitChart from './components/ProfitChart';
import OperationModal from './components/OperationModal';
import OperationList from './components/OperationList';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Home() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress as string;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      {/* Conteneur principal avec disposition verticale */}
      <div className="flex flex-col space-y-6 p-4">
        {/* En-tête avec ProductOverview et bouton Opération */}
        <div className="w-full flex justify-between items-center">
          <div className="flex-1">
            <ProductOverview email={email} />
          </div>
        
        </div>

        {/* Grille pour ProfitChart et OperationList côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full bg-base-100 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <ProfitChart email={email} />
          </div>
          <div className="w-full bg-base-100 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
             <button
            className="btn btn-primary flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-5 h-5" />
            Opération
          </button>
            <OperationList email={email} />
          </div>
        </div>

        
        {/* Modal pour ajouter une opération */}
        <OperationModal
          email={email}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Wrapper>
  );
}
