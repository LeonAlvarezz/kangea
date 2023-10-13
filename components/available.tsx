import React from 'react';
export default function Available() {
  return (
    <div className='sm:bg-middle-bar bg-middle-bar-mobile flex h-[400px] w-full flex-col items-center gap-4 px-24 py-10 text-blue-900 sm:gap-10 md:flex-row lg:gap-14'>
      <h1 className='text-center text-[60px] font-semibold leading-10 lg:text-left'>
        Jobs
        <span className='block text-[24px] font-normal underline decoration-blue-900'>
          Available
        </span>
      </h1>
      <div className='flex gap-4 lg:gap-10'>
        <div className='grid h-52 w-44 place-items-center rounded-3xl bg-white shadow-lg md:h-64 md:w-52 lg:h-80 lg:w-72'>
          <div>
            <h1 className='text-h2 text-center'>Internship</h1>
            <div className='flex justify-center'>
              <p className='h-1 w-1/2 bg-yellow-500'></p>
            </div>
            <h1 className='text-h2 text-center font-bold'>37,051</h1>
            <p className='text-p text-center'>Positions</p>
          </div>
        </div>

        <div className='grid h-52 w-44 place-items-center rounded-3xl bg-white shadow-lg md:h-64 md:w-52 lg:h-80 lg:w-72'>
          <div>
            <h1 className='text-h2 text-center'>Full-Time</h1>
            <div className='flex justify-center'>
              <p className='h-1 w-1/2 bg-teal-300'></p>
            </div>
            <h1 className='text-h2 text-center font-bold'>63,604</h1>
            <p className='text-p text-center'>Positions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
