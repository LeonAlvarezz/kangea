import React from 'react';
import Image from 'next/image';
import type { Job } from '@/type/type';
import Link from 'next/link';
type Props = {
  job: Job;
};
export default function LastestJobItem({ job }: Props) {
  const datePosted = new Date(job.datePosted);

  // Get the day, month, and year componentsWW
  const day = datePosted.getDate().toString().padStart(2, '0');
  const month = datePosted.getMonth().toString().padStart(2, '0');
  const year = datePosted.getFullYear();

  // Create the formatted date string
  const formattedDate = `${day}-${month}-${year}`;

  // Render the formatted date
  return (
    <div className='flex flex-col items-center justify-center p-10'>
      <div className='bg-card relative h-[350px] w-[300px] rounded-2xl shadow-lg shadow-gray-300'>
        <div className='absolute -top-10 left-0 right-0 m-auto max-h-[140px] max-w-[140px] overflow-hidden rounded-2xl shadow-lg'>
          <Image
            src={job.image}
            alt={job.imageAlt}
            width={0}
            height={0}
            layout='responsive'
          />
        </div>
        <div className='absolute left-0 right-0 top-24 m-auto '>
          <span className='flex justify-center'>
            <p className='rounded-2xl bg-orange-400 px-10 py-1 text-center text-white'>
              {job.job_type}
            </p>
          </span>
          <h2 className='mt-3 rounded-2xl text-center text-[20px] font-bold'>
            {job.position}
          </h2>
          <h3 className='text-center text-[18px] font-medium'>{job.company}</h3>
          <div className='mt-4 px-6'>
            <p className='text-[16px]'>Location: {job.location}</p>
            <p className='text-[16px]'>Date Posted: {formattedDate}</p>
            <p className='mb-4 text-[16px]'>Salary: {job.salary}$</p>
            <div className='flex justify-center'>
              <Link href={`/jobs/${job.id}`}>
                <button className='rounded-lg bg-orange-400 px-6 py-1 font-bold text-white transition-all hover:bg-orange-700'>
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
