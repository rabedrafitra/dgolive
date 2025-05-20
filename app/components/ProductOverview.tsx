import { StatLive } from '@/type'
import React, { useEffect, useState } from 'react'
import {  getStatLive } from '../actions'
import { CirclePlay, User, DollarSign, ShoppingCart} from 'lucide-react'

const ProductOverview = ({ email }: { email: string }) => {
    const [stats, setStats] = useState<StatLive | null>(null)

useEffect(() => {
    const fetchStats = async () => {
      try {
        if (email) {
          const result = await getStatLive(email);
          if (result) setStats(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, [email]); // ✅ Aucun warning ici

    return (
        <div>
            {stats ? (
                <div className='grid grid-cols-2 gap-4'>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Live Session</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.liveSessionCount}</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <CirclePlay className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Clients</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.clientCount}</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <User className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Commandes</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.orderCount}</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <ShoppingCart className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 p-4 border-base-200 rounded-3xl'>
                        <p className='stat-title'>Chiffre Affaire de ce mois</p>
                        <div className='flex justify-between items-center'>
                            <div className='stat-value'>{stats.totalRevenue} Ar</div>
                            <div className='bg-primary/25 p-3 rounded-full'>
                                <DollarSign className='w-5 h-5 text-primary text-3xl' />
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className='flex justify-center items-center w-full'>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            )}
        </div>
    )
}

export default ProductOverview
