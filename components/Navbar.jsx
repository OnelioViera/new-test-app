'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-6 bg-gray-400 shadow-lg border-b-2 border-b-gray-400">

      <div className='mx-auto max-w-7xl sm:px-6 lg:px-6'>
        <div className='relative flex items-center justify-between'>
          <Link href='/'>
            <h1 className="hidden lg:flex md:flex text-2xl text-white lg:text-left md:text-left">Navbar</h1>
            </Link>
          <div className='flex gap-4 text-lg'>
            <Link href='/' className={`${pathname === '/' ? 'text-blue-600 font-bold' : ''} text-white hover:font-bold hover:text-red-400 rounded-md px-3 py-2`}>
              Home
            </Link>
            <Link href='/link1' className={`${pathname === '/link1' ? 'text-red-600 font-bold' : ''} text-white hover:font-bold hover:text-red-400 rounded-md px-3 py-2`}>
              Link 1
            </Link>
            <Link href='/link2' className={`${pathname === '/link2' ? 'text-red-600 font-bold' : ''} text-white hover:font-bold hover:text-red-400 rounded-md px-3 py-2`}>
              Link 2
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
