import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LimkokwingImage from '@/public/img/Limkokwing.png';

import { Typography, Box, Container, Stack, Grid } from '@mui/material';
import '@/app/globals.css';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    paddingLeft={20}
                    paddingRight={20}
                >

                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={6}>
                            <Typography
                                variant="h3"
                                color="#176B87"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 'bold',
                                }}
                            >
                                About Us
                            </Typography>
                        </Grid>
                        <Grid item xs={6} marginTop={10}>
                            <Typography
                                variant="body1"
                                color="textPrimary"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 'normal',
                                    fontSize: '20px'
                                }}
                            >
                                The website was the first of its kind when it was established in 2023. Since that time, it has become the most popular and professional job announcements and classified advertising portal in Cambodia that offers the most legitimate service available in the country.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            width: '20px', // Adjust the width as needed
                            height: '40vh',
                            backgroundColor: '#176B87',
                        }}
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '70%',
                        }}
                        alt="Limkokwing"
                        src={LimkokwingImage.src}
                    />
                </Stack>
            </div>

            <footer style={{ marginTop: 'auto' }}>
                <Footer />
            </footer>

        </>
    )
}
export default AboutUs;
AboutUs.useClient = true;