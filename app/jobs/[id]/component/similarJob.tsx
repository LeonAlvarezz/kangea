import React from 'react';

export default function SimilarJob() {
  return (
    <div className='h-full'>
      <h2 className='text-primary px-4 py-1 text-xl font-semibold'>
        Similar Jobs
      </h2>
      <div
        style={{ height: 'calc(100% - 36px)' }}
        className='w-full rounded-xl p-4 shadow-sm shadow-gray-400'
      >
        <h1 className='mb-2 text-lg font-medium'>Cost Assistant</h1>
        <p className='text-description mb-3'>
          Dear All Connector,Wong & Meas Restaurant Co., Ltd is looking for a
          potential candidate to fulfill the position.
        </p>
        <button className='bg-button rounded-lg px-6 py-2 font-semibold text-white'>
          View Now
        </button>
      </div>
    </div>
  );
}
