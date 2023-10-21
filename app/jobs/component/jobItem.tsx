import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type Job from '../../type/type';
type Props = {
  job: Job;
};
export default function JobItem({ job }: Props) {
  const altText = job.ImageLink ? job.imageAlt : job.CompanyName;

  return (
    <>
      <Link href={`/jobs/${job.PostingID}`}>
        <div className='flex h-32 overflow-hidden rounded-xl shadow-lg  shadow-gray-300 transition-all hover:scale-105 hover:bg-[--primary] hover:text-white'>
          <div className='relative w-[150px]'>
            {job.ImageLink ? (
              <Image
                src={job.ImageLink}
                alt={altText}
                width={0}
                height={0}
                layout='fill'
                objectFit='cover'
              />
            ) : (
              <Image
                src='/img/placeholder.jpg'
                alt={altText}
                width={0}
                height={0}
                layout='fill'
                objectFit='cover'
              />
            )}
          </div>
          <div className='my-auto ml-4 w-[65%]'>
            <h4 className='text-h4 font-semibold'>{job.TitleName}</h4>
            <p className='text-p'>{job.CompanyName}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
