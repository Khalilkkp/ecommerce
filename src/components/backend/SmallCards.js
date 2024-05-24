import React from 'react'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'
import { ScanFace, ShoppingCart } from 'lucide-react'

function SmallCards() {
  const orderstats =  [{
    title: 'today orders',
    number: 4000,
    color: "bg-green-300",
    icon: ShoppingCart,
  },
  {
    title: 'yesterday orders',
    number: 40000,
    color: "bg-orange-300",
    icon: ScanFace,
  },{
    title: 'this month orders',
    number: 404545,
    color: "bg-blue-300",
    icon: ShoppingCart,
  },{
    title: 'last month orders',
    number: 4000,
    color: "bg-purple-300",
    icon: ShoppingCart,
  },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {/* card  */}
      {
        orderstats.map((item, i)=>{
          return (
            <div>
            <SmallCard   key={i} data={item} />
            </div>
          )
        })
      }
      
    </div>
  )
}

export default SmallCards;
