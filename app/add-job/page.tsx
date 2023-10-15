'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';

export default function AddJob() {
  return (
    <>
      <Navbar></Navbar>
      <form
        className='
            mt-10 
            flex 
            flex-col 
            items-center 
            gap-3'
      >
        <div className='flex items-center text-3xl font-bold text-[#176B87]'>
          Describe Your Company
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Title
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            type='text'
            placeholder='Enter your job title'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Company
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            type='text'
            placeholder='Enter the name of your company'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Location
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            type='text'
            placeholder='Enter where your job located'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Description
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            type='text'
            placeholder='Enter your job description'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Requirement
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            type='text'
            placeholder='Enter job requirement'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Salary
          </label>
          <input
            className='
                    w-[175px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[300px]
                '
            type='text'
            placeholder='Salary Range'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Company Logo
          </label>
          <div
            className='
                    w-[300px]
                    flex-row
                    rounded-[15px]
                    px-4
                    py-2
                    md:w-[300px]
                    md:border
                    md:border-gray-500
                '
          >
            <input
              type='file'
              className='
                    block 
                    w-full 
                    text-sm 
                    text-slate-800
                    file:mr-4 
                    file:rounded-full 
                    file:border-0
                    file:bg-[#176B87] 
                    file:px-4
                    file:py-2 
                    file:text-sm
                    file:font-semibold 
                    file:text-white
                    hover:file:bg-[#023444]
                     '
            />
          </div>
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Contact Detail
          </label>
          <input
            className='
                    w-[175px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[300px]
                '
            type='text'
            placeholder='Enter your contact detail'
          />
        </div>
        <button
          className='
                mb-[50px]
                mt-5
                rounded-[15px]
                border
                border-gray-500
                bg-[#104f64]
                px-[50px]
                py-2
                text-[20px]
                font-bold
                text-white
                hover:border-none
                hover:bg-[#023444]
            '
        >
          Upload
        </button>
      </form>
    </>
  );
}
