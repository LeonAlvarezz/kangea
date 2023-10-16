import React from 'react';
import Image from 'next/image';
import type { Job } from '@/type/type';
import Link from 'next/link';
type Props = {
  job: Job;
};
export default function LastestJobItem({ job }: Props) {
  const datePosted = job.DatePosted; // Your date string

  // Create a Date object from the provided date string
  const date = new Date(datePosted);

  // Use Date methods to extract day, month, year, and time
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString();

  // Create a formatted date string
  const formattedDate = `${month} ${day}, ${year}`;

  // Check if ImageLink is null and set altText accordingly
  const altText = job.ImageLink ? job.imageAlt : 'No Image Available';

  // Render the formatted date
  return (
    <div className='flex flex-col items-center justify-center p-10'>
      <div className='bg-card relative h-[350px] w-[300px] rounded-2xl shadow-2xl'>
        <div className='absolute -top-10 left-0 right-0 m-auto max-h-[140px] max-w-[140px] overflow-hidden rounded-2xl shadow-lg'>
          {job.ImageLink ? (
            <Image
              src={job.ImageLink}
              alt={altText}
              width={0}
              height={0}
              layout='responsive'
            />
          ) : (
            <Image src='/path-to-default-image.png' alt={altText} />
            // Replace "/path-to-default-image.png" with your default image source
          )}
        </div>
        <div className='absolute left-0 right-0 top-24 m-auto '>
          <span className='flex justify-center'>
            <p className='rounded-2xl bg-orange-400 px-10 py-1 text-center text-white'>
              {job.Type}
            </p>
          </span>
          <h2 className='mt-3 rounded-2xl text-center text-[20px] font-bold'>
            {job.position}
          </h2>
          <h3 className='text-center text-[18px] font-medium'>
            {job.CompanyName}
          </h3>
          <div className='mt-4 px-6'>
            <p className='text-[16px]'>Location: {job.Location}</p>
            <p className='text-[16px]'>Date Posted: {formattedDate}</p>
            <p className='mb-4 text-[16px]'>Salary: {job.Salary}$</p>
            <div className='flex justify-center'>
              <Link href={`/jobs/${job.PostingID}`}>
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
