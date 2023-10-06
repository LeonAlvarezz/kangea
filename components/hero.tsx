import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='mb-16 mt-16 flex flex-col justify-center'>
        <h1 className='text-h1 text-primary block text-center font-bold'>
          Welcome to Job Cambodia
          <br />
          Your Gateway to Opportunities!
        </h1>

        <div className='mt-12 flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0'>
          <div className='basis-1/3 pr-0 md:basis-1/2 md:pr-20 lg:pr-40'>
            <p className='text-p  text-center md:text-left lg:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex justify-center md:justify-start lg:justify-start'>
              <button className='bg-button mt-6 rounded-md px-6 py-3 text-xl font-bold text-white '>
                <Link href='/'>Find Job Now</Link>
              </button>
            </div>
          </div>
          <div className='w-[400px] basis-1/2 md:w-[700px] md:basis-1/2'>
            <Image
              src='/img/hero-graphic.png'
              alt='hero-graphic'
              width={700}
              height={0}
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </>
  );
}