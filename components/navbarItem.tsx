import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function NavBarItem() {
  return (
    <div>
      <ul className='flex gap-12'>
        <li className='grid place-items-center text-lg font-bold'>
          <Link href='/about'>About Us</Link>
        </li>

        <li className='grid place-items-center text-lg font-bold'>
          <Link href='/contact'>Contact Us</Link>
        </li>
        <li className='h-[80px] w-[1px] bg-gray-400'></li>
        <li className='grid place-items-center text-lg font-bold'>
          <Link href='/jobs'>Jobs</Link>
        </li>
        <li className='grid place-items-center text-lg font-bold'>
          <Link href='/add-job'>Add Job</Link>
        </li>
      </ul>
    </div>
  );
}
