import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductChart from './BestSellingProductChart'

function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4  '>
      <WeeklySalesChart />
      <BestSellingProductChart />
    </div>
  )
}

export default DashboardCharts
