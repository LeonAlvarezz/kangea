import Image from 'next/image';
import Hero from '../components/hero';
import Available from '../components/available';
import LastestJob from '../components/lastestJob';
import Hamburger from '../components/hamburger';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className='m-auto w-[90%]'>
        <Hero></Hero>
      </div>
      <Available></Available>
      <div className='m-auto lg:w-[80%] xl:w-[60%]'>
        <LastestJob></LastestJob>
      </div>
    </>
  );
}
