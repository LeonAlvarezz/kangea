import React from 'react';
import LastestJobItem from './lastestJobItem';

export default function LastestJob() {
  return (
    <div className='mt-10'>
      <h1 className='text-h2 text-primary text-center font-bold'>
        Lastest Jobs
      </h1>
      <div className='flex justify-center'>
        <p className='h-1 w-[10%] bg-teal-300'></p>
      </div>
      <LastestJobItem></LastestJobItem>
    </div>
  );
}
