import { ShoppingCart } from 'lucide-react'
import React from 'react'

function SmallCard({data}) {
  return (
    <div className= {`rounded-lg  p-4 shadow-lime-200 mt-4 bg-slate-200`}>
      <div className='flex space-x-4'>
        <div className= {`${data.color} rounded-full w-12 h-12  flex items-center justify-center`}>
        {data.icon}
        </div>
        <div className=''>
        <p>{data.title}</p>
        <h3 className='font-bold text-2xl'>{data.number}</h3>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
