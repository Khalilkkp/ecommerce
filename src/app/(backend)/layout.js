import Nav1 from '@/components/Nav1'
import Navbar from '@/components/backend/Navbar'
import React from 'react'

function layout({children}) {
  return (
    <div className='flex'>
        <Navbar />
        <div className='w-full'>
        <Nav1 />
      <main className='text-slate-800 bg-slate-50 px-5 py-4 ml-60'>{children}</main>
      </div>
    </div>
  )
}

export default layout
