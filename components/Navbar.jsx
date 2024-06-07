'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-6 bg-gray-400 shadow-lg border-b-2 border-gray-500">

      <div className='mx-auto max-w-7xl sm:px-6 lg:px-6'>
        <div className='relative flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='/next-js-logo.png'
              alt='logo'
              width={120}
              height={120}
            className='hidden gl:flex md:flex '/>
            </Link>
          <div className='flex gap-4 text-lg'>
            <Link href='/' className={`${pathname === '/' ? 'font-bold border-b-2 border-gray-700' : ''} text-white hover:font-bold hover:text-gray-600 px-3 py-2`}>
              Home
            </Link>
            <Link href='/link1' className={`${pathname === '/link1' ? 'font-bold border-b-2 border-gray-700' : ''} text-white hover:font-bold hover:text-gray-600 px-3 py-2`}>
              Link 1
            </Link>
            <Link href='/link2' className={`${pathname === '/link2' ? 'font-bold border-b-2 border-gray-700' : ''} text-white hover:font-bold hover:text-gray-600 px-3 py-2`}>
              Link 2
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
