import React from 'react';
import { Category } from '../../../type/type';
type Props = {
  category: Category;
};

export default function JobCategoryItem({ category }: Props) {
  return (
    <div className='border-primary rounded-xl border-[1px] p-2 hover:cursor-pointer hover:bg-[--primary] hover:text-white'>
      <div className='h-full'>
        <h2 className='text-p text-center'>{category.name}</h2>
      </div>
    </div>
  );
}
