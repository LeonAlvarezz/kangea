import React from 'react';
import { Typography, Box, Stack, useMediaQuery } from '@mui/material/';
import Link from 'next/link'; // Import Link from react-router-dom
import "../public/css/globals.css";
import AboutUs from '../pages/about';
import facebookImage from '@/public/img/facebook.png';
import telegramImage from '@/public/img/telegram.png';
import linkedinImage from '@/public/img/linkin.png';
import twitterImage from '@/public/img/twitter.png';
import {
    ThemeProvider,
    createTheme,
    useTheme
} from '@mui/material/styles';

interface Link {
    text: string;
    url?: string;
}

interface FooterSection {
    text: string;
    variant?: "body1" | "h5";
    fontWeight?: string;
    url?: string;
}


export default function Footer() {
    const listItemStyles = {
        marginBottom: '16px',
    };

    const footerStyle: React.CSSProperties = {
        paddingTop: '30px',
        paddingBottom: '70px',
        paddingLeft: '15%',
        paddingRight: '15%',
    }

    const matches = useMediaQuery('(min-width:800px)');

    const generateListItems = (items: FooterSection[]) => {

        const commonTypographyStyles = {
            fontFamily: 'Montserrat, sans-serif',
            variant: 'body1',
            color: 'white',
        };
        return (
            <Stack >
                {items.map((item, index) => (
                    <div key={index} style={listItemStyles}>
                        {item.url ? (
                            <Link href={item.url} passHref>
                                {item.variant === 'h5' ? (
                                    <Typography
                                        variant={item.variant}
                                        color="white"
                                        style={{
                                            ...commonTypographyStyles,
                                            fontWeight: item.fontWeight || 'normal',
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="body1"
                                        color="white"
                                        style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: item.fontWeight || 'normal',
                                            marginBottom: '-5px'
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                )}
                            </Link>
                        ) : (
                            <>
                                {item.variant === 'h5' ? (
                                    <Typography
                                        variant={item.variant}
                                        color="white"
                                        style={{
                                            ...commonTypographyStyles,
                                            fontWeight: item.fontWeight || 'normal',
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="body1"
                                        color="white"
                                        style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: item.fontWeight || 'normal',
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </Stack>

        );
    };

    const links: Link[] = [
        { text: 'Home Page', url: '/' }, // Replace with actual routes
        { text: 'About Us', url: '/about' },
        { text: 'Contact Us', url: '/contact' },
        { text: 'Help', url: '/help' },
        { text: 'Term & Conditions', url: '/terms' },
        { text: 'FQA', url: '/faq' },
    ];

    const contactInfo: FooterSection[] = [
        { text: 'Phnom Penh Campus, Cambodia. 79, Kampuchea Krom Blvd, Sangkat Monorom, Khan 7 Makara, Phnom Penh, Cambodia.' },
        { text: 'Find Us in Social media:', fontWeight: 'bold' },
    ];

    const socialMediaImages = [
        { alt: 'Facebook', src: facebookImage.src, width: '40px', height: undefined },
        { alt: 'Telegram', src: telegramImage.src, width: '40px', height: '40px' },
        { alt: 'LinkedIn', src: linkedinImage.src, width: '40px', height: '40px' },
        { alt: 'Twitter', src: twitterImage.src, width: '40px', height: '40px' },
    ];

    return (
        <div className='bg-primary-color'>
            <div style={footerStyle}>
                <Stack
                    direction={matches ? 'row' : 'column'}
                    spacing={4}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Stack spacing={2}>
                        {generateListItems([
                            { text: 'Cambodia Job', variant: 'h5', fontWeight: 'bold', url: '/home' },
                            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue auctor diam id egestas. Duis at ligula eu arcu elementum pellentesque.' },
                            { text: '2023 Company Name Pte Ltd. All Rights Reserved.' },
                        ])}
                    </Stack>

                    <Stack
                        style={{
                            width: matches ? '500px' : 'auto'
                        }}>
                        {generateListItems([
                            {
                                text: 'Useful Links',
                                variant: 'h5',
                                fontWeight: 'bold'
                            },
                            ...links,
                        ])}
                    </Stack>

                    <Stack spacing={2}>
                        <Stack spacing={2}>
                            {generateListItems([
                                {
                                    text: 'Contact Us',
                                    variant: 'h5',
                                    fontWeight: 'bold'
                                },
                                ...contactInfo,
                            ])}
                        </Stack>

                        <Stack spacing={2} direction="row">
                            {socialMediaImages.map((image, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    sx={{
                                        width: image.width,
                                        height: image.height,
                                    }}
                                    alt={image.alt}
                                    src={image.src}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Stack>

            </div>
        </div>
    );
}