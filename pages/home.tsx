import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '40px' }}>
      </Container>
      <Footer />
    </>
  );
}
