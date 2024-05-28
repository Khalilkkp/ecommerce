import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

function Nav1() {
  return (
    <div className='flex justify-between items-center bg-slate-800 text-slate-50 h-16 px-8 py-8 ml-60'>
      <button><AlignJustify /></button>
      <div className='space-x-3'>
      <button><Sun /></button>
      {/* notification badge  */}
      <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg 
        focus:outline-none  ">
      <Bell />
<span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs 
  font-bold text-white bg-red-500  border-white rounded-full -top-1 end-5 dark:border-gray-900">20</div>
</button>
      {/* end notification badge  */}
      
      <button><User /></button>
      </div>
    </div>
  )
}

export default Nav1
