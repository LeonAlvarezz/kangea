'use client';
import React from 'react';
import { Typography, useMediaQuery, Stack } from '@mui/material';
import { Image } from 'react-bootstrap';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

export default function AboutUs() {
  const matches = useMediaQuery('(min-width:800px)');

  const containerStyle = {
    display: 'flex',
    flexDirection: matches ? 'column' : 'row',
    alignItems: 'center',
    margin: '0 auto',
    width: '80%',
  };

  const gridItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    flex: '1',
  };

  const variant = matches ? 'h3' : 'h4';

  const verticalLineStyle = {
    backgroundColor: '#176B87', // Color of the vertical line
    width: matches ? '15px' : '40vh',
    minHeight: '100%', // Set minHeight to ensure the line extends to full height
  };

  return (
    <>
      <section>
        <Stack
          direction={matches ? 'row' : 'column'}
          spacing={2}
          style={{
            width: '90%',
            alignItems: 'center',
            margin: 'auto',
            minHeight: 'calc(100vh - 100px)',
          }}
        >
          <div style={gridItemStyle}>
            <Typography
              variant={variant}
              color='#176B87'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
              }}
              className='mb-5'
            >
              About Us
            </Typography>

            <Typography
              variant='body1'
              color='textPrimary'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'normal',
                fontSize: matches ? '20px' : '16px',
              }}
            >
              The website was the first of its kind when it was established in
              2023. Since that time, it has become the most popular and
              professional job announcements and classified advertising portal
              in Cambodia that offers the most legitimate service available in
              the country.
            </Typography>
          </div>

          {/* Vertical Line */}
          <div
            className='bg-primary-color'
            style={{
              width: matches ? '5px' : '150px',
              height: matches ? '30vh' : '5px',
              marginTop: matches ? '30px' : '0px',
              marginBottom: matches ? '30px' : '0px',
              borderRadius: '10px',
            }}
          ></div>

          {/* Right Grid Item */}
          <div style={gridItemStyle}>
            <Image alt='Limkokwing' src='/img/limkokwing.png' width='100%' />
          </div>
        </Stack>
      </section>
    </>
  );
}
AboutUs.useClient = true;
