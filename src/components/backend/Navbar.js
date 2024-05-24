import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-slate-800 space-y-6 w-60 h-screen text-slate-400 left-0 top-0 fixed p-3'>
      <Link href='@'>logo</Link>
      <div className='space-y-3f flex flex-col mb-5 space-y-3'>
      <Link href='@'>dashboard</Link>
      <Link href='@'>catalogue</Link>
      <Link href='@'>customers</Link>
      <Link href='@'>markets</Link>
      <Link href='@'>orders</Link>
      <Link href='@'>settings</Link>
      <Link href='@'>orders</Link>
      <Link href='@'>staff </Link>
      <Link href='@'>Online Store</Link>


      </div>
    </div>
  )
}

export default Navbar
