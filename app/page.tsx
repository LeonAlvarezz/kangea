import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Available from '../components/available';
import LastestJob from '../components/lastestJob';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='m-auto w-[90%]'>
        <Hero></Hero>
      </div>
      <Available></Available>
      <div className='m-auto w-[70%]'>
        <LastestJob></LastestJob>
      </div>
    </>
  );
}
