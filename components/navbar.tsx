import React from 'react';
import Image from 'next/image';
import NavBarItem from './navbarItem';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className='bg-primary-color w-full'>
        <div className='m-auto flex h-[100px] w-[90%] items-center justify-between text-white'>
          <div className='w-[141px]'>
            <a href="/">
              <Image
                src='/img/kanhea-logo.png'
                width={141}
                height={79}
                alt='kanhea-logo'
              />
            </a>
          </div>
          <div className='flex items-center justify-center gap-16'>
            <NavBarItem></NavBarItem>
          </div>
        </div>
      </div>
    </>
  );
}
