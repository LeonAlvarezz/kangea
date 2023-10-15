import React from 'react';
import { BsFillClipboardFill } from 'react-icons/bs';
import JobCategoryItem from './jobCategoryItem';
import categories from '../../../mock-data/jobCategory';
export default function JobCategory() {
  return (
    <div className='w-full'>
      <div className='border-primary mb-6 h-12 rounded-xl border-[1px]'>
        <div className='text-primary flex h-full items-center justify-center gap-4'>
          <BsFillClipboardFill size={25} />
          <h2 className='text-xl font-semibold'>Job Category</h2>
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
