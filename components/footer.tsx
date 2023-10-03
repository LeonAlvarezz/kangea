import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography, Box } from '@mui/material/';
import Link from 'next/link'; // Import Link from react-router-dom
import "@/app/globals.css";
import AboutUs from '../pages/about';
import facebookImage from '@/public/img/facebook.png';
import telegramImage from '@/public/img/telegram.png';
import linkedinImage from '@/public/img/linkin.png';
import twitterImage from '@/public/img/twitter.png';

interface Link {
    text: string;
    url?: string;
}

interface FooterSection {
    text: string;
    variant?: "body1" | "h5";
    fontWeight?: string;
    url?: string; // Make 'url' property optional
}

export default function Footer() {
    const listItemStyles = {
        marginBottom: '-16px', // Add margin to the bottom of each <li>
    };

    const generateListItems = (items: FooterSection[]) => {
        const commonTypographyStyles = {
            fontFamily: 'Montserrat, sans-serif',
            variant: 'body1',
            color: 'white',
        };
        return (
            <List>
                {items.map((item, index) => (
                    <ListItem key={index} style={listItemStyles}>
                        {item.url ? (
                            <Link href={item.url} passHref>
                                <ListItemText>
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
                                </ListItemText>
                            </Link>
                        ) : (
                            <ListItemText>
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
                            </ListItemText>
                        )}
                    </ListItem>
                ))}
            </List>
        );
    };

    const links: Link[] = [
        { text: 'Home Page', url: '/' }, // Replace with actual routes
        { text: 'About Us', url: '/about' },
        { text: 'Help', url: '/help' },
        { text: 'Term & Conditions', url: '/terms' },
        { text: 'FQA', url: '/faq' },
    ];

    const contactInfo: FooterSection[] = [
        { text: 'Phnom Penh Campus, Cambodia. 79, Kampuchea Krom Blvd, Sangkat Monorom, Khan 7 Makara, Phnom Penh, Cambodia.' },
        { text: 'Find Us in Social media:', fontWeight: 'bold' },
    ];

    return (
        <div className='bg-primary-color'>
            <div style={{ paddingTop: '10px', paddingBottom: '70px', paddingLeft: '15%', paddingRight: '15%' }}>
                <Grid container spacing={4} justifyContent='center' alignItems='flex-start'>
                    <Grid item xs={4}>
                        {generateListItems([
                            { text: 'Cambodia Job', variant: 'h5', fontWeight: 'bold', url: '/home' }, // Replace '#' with the route
                            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue auctor diam id egestas. Duis at ligula eu arcu elementum pellentesque.' },
                            { text: '2023 Company Name Pte Ltd. All Rights Reserved.' },
                        ])}
                    </Grid>
                    <Grid item xs={4}>
                        {generateListItems([
                            { text: 'Useful Links', variant: 'h5', fontWeight: 'bold' },
                            ...links,
                        ])}
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                {generateListItems([
                                    { text: 'Contact Us', variant: 'h5', fontWeight: 'bold' },
                                    ...contactInfo,
                                ])}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item marginLeft={2}>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: '40px',
                                            }}
                                            alt="Facebook"
                                            src={facebookImage.src}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: '40px',
                                                height: '40px',
                                            }}
                                            alt="Telegram"
                                            src={telegramImage.src}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: '40px',
                                                height: '40px',
                                            }}
                                            alt="LinkedIn"
                                            src={linkedinImage.src}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: '40px',
                                                height: '40px',
                                            }}
                                            alt="Twitter"
                                            src={twitterImage.src}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}