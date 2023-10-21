import React from 'react';
import type { Job } from '../../type/type';
import Link from 'next/link';
type param = {
  nextJob: Job;
};
export default function SimilarJob({ nextJob }: params) {
  return (
    <div className=''>
      <h2 className='text-primary px-4 py-1 text-xl font-semibold'>Next Job</h2>
      <div className='rounded-xl p-4 shadow-md shadow-gray-400'>
        <h1 className='text-h4 text-primary w-[80%] overflow-hidden text-ellipsis whitespace-nowrap font-medium'>
          {nextJob.Title}
        </h1>
        <p className='text-p text-ellipsis'>{nextJob.CompanyName}</p>
        <p className='text-p  mb-3'>Salary: {nextJob.Salary}</p>
        <Link href={`/jobs/${nextJob.PostingID}`}>
          <button className='bg-button rounded-lg px-6 py-2 font-semibold text-white'>
            View Now
          </button>
        </Link>
      </div>
    </div>
  );
}
