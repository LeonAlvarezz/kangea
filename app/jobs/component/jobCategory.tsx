import React from 'react';
import { BsFillClipboardFill } from 'react-icons/bs';
import JobCategoryItem from './jobCategoryItem';
import categories from '../../../mock-data/jobCategory';
export default function JobCategory() {
  return (
    <div className='w-full'>
      <div className='border-primary mb-6 rounded-xl border-[1px] p-2'>
        <div className='text-primary flex items-center justify-center gap-4'>
          <div className='hidden md:block'>
            <BsFillClipboardFill size={25} />
          </div>
          <h2 className='text-p text-center font-semibold'>Job Category</h2>
        </div>
      </div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <JobCategoryItem category={category}></JobCategoryItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
