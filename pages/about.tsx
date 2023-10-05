import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LimkokwingImage from '@/public/img/Limkokwing.png';
import { Typography, useMediaQuery, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Image } from 'react-bootstrap';

export default function AboutUs() {
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:800px)');

    const containerStyle = {
        display: 'flex',
        flexDirection: matches ? 'column' : 'row',
        alignItems: 'center',
        margin: '0 auto', // Center the content horizontally
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
            <Navbar />
            <section>
                <Stack
                    direction={matches ? 'row' : 'column'}
                    spacing={2}
                    style={{
                        width: '70%',
                        alignItems: 'center',
                        margin: '0 auto',
                    }}
                >
                    <div style={gridItemStyle}>
                        <Typography
                            variant={variant}
                            color="#176B87"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'bold',
                            }}
                            className='mb-5'
                        >
                            About Us
                        </Typography>

                        <Typography
                            variant="body1"
                            color="textPrimary"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'normal',
                                fontSize: matches ? '20px' : '16px',
                            }}
                        >
                            The website was the first of its kind when it was established in 2023. Since that time, it has become the most popular and professional job announcements and classified advertising portal in Cambodia that offers the most legitimate service available in the country.
                        </Typography>
                    </div>

                    {/* Vertical Line */}
                    <div
                        className="bg-primary-color"
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
                        <Image
                            alt="Limkokwing"
                            src={LimkokwingImage.src}
                            width='100%'
                        />
                    </div>
                </Stack>
            </section>
            <footer style={{ marginTop: 'auto' }}>
                <Footer />
            </footer>
        </>
    );
}
AboutUs.useClient = true;
