'use client'
import { Folder, Weight } from 'lucide-react'
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function WeeklySalesChart() {
  const tabs = [
    {
      title: 'Sales',
      type: 'sales',
    },
    {
      title: 'Orders',
      type: 'orders',
    },
  ]
  const [charttodisplay, setchartodisplay] = useState(tabs[0].type);
  return (
    <div>
      {/* tabs  */}
      

<div classname="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul classname="flex flex-wrap -mb-px">
      {
        tabs.map((item,i)=>{
          return(
            <button onClick={()=>setchartodisplay(item.type)} className={charttodisplay===item.type?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 active":
            "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }>{item.title}</button>
          )
        })
      }
        
        
    </ul>
</div>
{
  tabs.map((item,i)=>{
    if (charttodisplay===item.type){
   return (
    <Line options={options} data={data} />
   )
  }
  })
  
}


      {/* end tabs */}
    </div>
  )
}

export default WeeklySalesChart


