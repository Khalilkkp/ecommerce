import React from 'react'
import LargeCard from './LargeCard'

function LargeCards() {
  const orderstats =  [{
    period: 'today sales',
    sales: 4000,
    color: "bg-green-300"
  },
  {
    period: 'yesterday sales',
    sales: 40000,
    color: "bg-orange-300"
  },{
    period: 'this month sales',
    sales: 40044545,
    color: "bg-blue-300"
  },{
    period: 'last month sales',
    sales: 4000,
    color: "bg-purple-300"
  },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {/* card  */}
      {
        orderstats.map((item, i)=>{
          return (
            <LargeCard className={orderstats.color}  key={i} data={item} />
          )
        })
      }
      
    </div>
  )
}

export default LargeCards
