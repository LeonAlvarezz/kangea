import React from 'react';
import { Category } from '../../../type/type';
type Props = {
  category: Category;
};

export default function JobCategoryItem({ category }: Props) {
  return (
    <div className='border-primary h-12 rounded-xl border-[1px]'>
      <div className='flex h-full items-center justify-center'>
        <h2 className='text-xl'>{category.name}</h2>
      </div>
    </div>
  );
}
