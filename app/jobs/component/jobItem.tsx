import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type Job from '../../type/type';
type Props = {
  job: Job;
};
export default function JobItem({ job }: Props) {
  return (
    <>
      <Link href={`/jobs/${job.id}`}>
        <div className='flex h-32 overflow-hidden rounded-xl shadow-lg  shadow-gray-300 transition-all hover:scale-105 hover:bg-[--primary] hover:text-white'>
          <div className='relative h-full w-[150px]'>
            <Image
              src={job.image}
              alt={job.imageAlt}
              width={0}
              height={0}
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div className='my-auto ml-4 '>
            <h4 className='text-h4 font-semibold'>{job.position}</h4>
            <p className='text-p'>{job.company}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
