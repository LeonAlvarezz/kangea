import 'public/css/globals.css';
import 'public/css/font.css';
import 'public/css/main.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kangea',
  description: 'Welcome to Job Cambodia Your Gateway to Opportunities!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-w-sm'>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
