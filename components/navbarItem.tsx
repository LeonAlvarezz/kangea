'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import Hamburger from './hamburger';

export default function NavBarItem() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle: void = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=''>
      <ul className='flex gap-12'>
        <li className='hidden text-lg font-bold md:grid md:place-items-center '>
          <Link href='/jobs'>Jobs</Link>
        </li>
        <li className='hidden h-[80px] w-[1px] bg-gray-400 md:grid'></li>

        <li className='hidden place-items-center text-lg font-bold md:grid'>
          <Link href='/about'>About</Link>
        </li>

        <li className='hidden place-items-center text-lg font-bold md:grid'>
          <Link href='/contact'>Contact</Link>
        </li>
        <li className='hidden place-items-center text-lg font-bold md:grid'>
          <Link href='/add-job'>
            <button className='rounded-lg bg-sky-600 px-6 py-3 transition-all hover:bg-sky-900'>
              Add Job
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
