import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Available from '../components/available';
import LastestJob from '../components/lastestJob';
import "../public/css/globals.css";
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='m-auto w-[90%]'>
        <Hero></Hero>
      </div>
      <Available></Available>
      <div className='m-auto w-[90%]'>
        <LastestJob></LastestJob>
      </div>
      <Footer></Footer>
    </>
  );
}