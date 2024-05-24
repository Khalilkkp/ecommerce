import { Layers } from 'lucide-react'
import React from 'react'

function LargeCard({data}) {
  return (
    <div className = {` rounded-lg text-white p-8 ${data.color} `}>
      <Layers />
      <h4>{data.period}</h4>
      <h2 className='text-3xl'>UGX.{data.sales}</h2>
    </div>
  )
}

export default LargeCard
