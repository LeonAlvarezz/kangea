import React from 'react';
import Image from 'next/image';
export default function LastestJobItem() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-16 p-10 lg:flex-row lg:gap-10'>
      <div className='bg-card relative h-[350px] w-[280px] rounded-2xl shadow-2xl'>
        <div className='absolute -top-10 left-0 right-0 m-auto max-h-[140px] max-w-[140px] overflow-hidden rounded-2xl shadow-lg'>
          <Image
            src='/img/world-fish.png'
            alt='world-fish'
            width={0}
            height={0}
            layout='responsive'
          />
        </div>

        <div className='absolute left-0 right-0 top-24 m-auto '>
          <span className='flex justify-center'>
            <p className='rounded-2xl bg-yellow-500 px-10 py-1 text-center'>
              Intern
            </p>
          </span>
          <h2 className='mt-3 rounded-2xl text-center text-[20px] font-bold'>
            Junior IT Support
          </h2>
          <h3 className='text-center text-[18px] font-medium'>Smart Axiata</h3>
          <div className='mt-8 px-6'>
            <p className='text-[16px]'>Location: Phnom Penh</p>
            <p className='text-[16px]'>Date Posted: 20-10-2023</p>
            <p className='text-[16px]'>Salary: Allowance</p>
          </div>
        </div>
      </div>

      <div className='bg-card relative h-[350px] w-[280px] rounded-2xl shadow-2xl'>
        <div className='absolute -top-10 left-0 right-0 m-auto max-h-[140px] max-w-[140px] overflow-hidden rounded-2xl shadow-lg'>
          <Image
            src='/img/world-fish.png'
            alt='world-fish'
            width={0}
            height={0}
            layout='responsive'
          />
        </div>

        <div className='absolute left-0 right-0 top-24 m-auto '>
          <span className='flex justify-center'>
            <p className='rounded-2xl bg-yellow-500 px-10 py-1 text-center'>
              Intern
            </p>
          </span>
          <h2 className='mt-3 rounded-2xl text-center text-[20px] font-bold'>
            Junior IT Support
          </h2>
          <h3 className='text-center text-[18px] font-medium'>Smart Axiata</h3>
          <div className='mt-8 px-6'>
            <p className='text-[16px]'>Location: Phnom Penh</p>
            <p className='text-[16px]'>Date Posted: 20-10-2023</p>
            <p className='text-[16px]'>Salary: Allowance</p>
          </div>
        </div>
      </div>

      <div className='bg-card relative h-[350px] w-[280px] rounded-2xl shadow-2xl'>
        <div className='absolute -top-10 left-0 right-0 m-auto max-h-[140px] max-w-[140px] overflow-hidden rounded-2xl shadow-lg'>
          <Image
            src='/img/world-fish.png'
            alt='world-fish'
            width={0}
            height={0}
            layout='responsive'
          />
        </div>

        <div className='absolute left-0 right-0 top-24 m-auto '>
          <span className='flex justify-center'>
            <p className='rounded-2xl bg-yellow-500 px-10 py-1 text-center'>
              Intern
            </p>
          </span>
          <h2 className='mt-3 rounded-2xl text-center text-[20px] font-bold'>
            Junior IT Support
          </h2>
          <h3 className='text-center text-[18px] font-medium'>Smart Axiata</h3>
          <div className='mt-8 px-6'>
            <p className='text-[16px]'>Location: Phnom Penh</p>
            <p className='text-[16px]'>Date Posted: 20-10-2023</p>
            <p className='text-[16px]'>Salary: Allowance</p>
          </div>
        </div>
      </div>
    </div>
  );
  ``;
}