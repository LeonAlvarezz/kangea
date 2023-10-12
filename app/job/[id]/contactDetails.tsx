import React from 'react';

export default function ContactDetail() {
  return (
    <div className='h-full rounded-2xl p-6 shadow-md shadow-gray-400'>
      <h1 className='text-primary text-2xl font-bold leading-[3rem] '>
        Contact Details
      </h1>
      <h2 className='text-xl leading-[2.5rem]'>Office Address</h2>
      <p>
        Address Position - Building 558 Russian Blvd., Sangkat Kakab, Khan Pur
        SenChey, Phnom Penh, Cambodia
      </p>
      <br />
      <h2 className='text-xl leading-[2.5rem]'>Contact Name</h2>
      <p>Ontario Education (Cambodia) Co., Ltd.</p>
      <br />
      <h2 className='text-xl leading-[2.5rem]'>Email</h2>
      <p>example@gmail.com</p>
      <div className='mt-10 flex justify-start'>
        <button className='bg-button rounded-lg px-6 py-2 font-semibold text-white'>
          Apply Now
        </button>
      </div>
    </div>
  );
}
