import { AlignJustify, Sun } from 'lucide-react'
import React from 'react'

function Nav1() {
  return (
    <div className='flex justify-between items-center bg-slate-800 text-slate-50 h-16 px-8 py-3 ml-60'>
      <button><AlignJustify /></button>
      <div className='space-x-3'>
      <button><Sun /></button>
      <button><Sun /></button>
      <button><Sun /></button>
      <button><Sun /></button>
      </div>
    </div>
  )
}

export default Nav1
