import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LimkokwingImage from '@/public/img/Limkokwing.png';
import "@/app/globals.css";

import {
    Typography,
    TextField,
    Card,
    CardContent,
    Stack,
    Button,
    useMediaQuery,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import {
    LocalPhoneRounded as LocalPhoneRoundedIcon,
    EmailRounded as EmailRoundedIcon,
    LocationOnRounded as LocationOnRoundedIcon,
} from '@mui/icons-material';

type TextFieldProps = {
    id: string;
    label: string;
    width?: string;
    fullWidth?: boolean;
    multiLine?: boolean
};

export default function ContactUs() {

    const submitButtonFlase = createButton('false');
    const submitButtonTrue = createButton('true');

    const matches = useMediaQuery('(min-width:1200px)');

    function createButton(check: string) {
        const matches = useMediaQuery('(min-width:1200px)');
        return (
            <Button
                variant="contained"
                style={{
                    backgroundColor: '#053B50',
                    borderRadius: '10px',
                    width: matches ? '160px' : '100%',
                    display: check === 'true' ? 'block' : 'none'
                }}
            >
                <Typography
                    variant="body1"
                    color="white"
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold',
                    }}
                >
                    Submit
                </Typography>
            </Button>
        );
    }

    const contactInfo = [
        {
            icon: <LocalPhoneRoundedIcon sx={{ color: 'white' }} />,
            text: '+855 12345 6789',
        },
        {
            icon: <EmailRoundedIcon sx={{ color: 'white' }} />,
            text: 'limkokwing@gmail.com',
        },
        {
            icon: <LocationOnRoundedIcon sx={{ color: 'white' }} />,
            text: '79 Kampuchea Krom Blvd (128), Phnom Penh 12251',
        },
    ];

    const textFields: TextFieldProps[][] = [
        [
            {
                id: 'first-name',
                label: 'First Name',
                width: matches ? '250px' : '350px',
            },
            {
                id: 'last-name',
                label: 'Last Name',
                width: matches ? '250px' : '350px',
            },
        ],
        [
            {
                id: 'email',
                label: 'Email',
                width: matches ? '250px' : '350px',
            },
            {
                id: 'phone-number',
                label: 'Phone Number',
                width: matches ? '250px' : '350px',
            },
        ],
        [
            {
                id: 'message',
                label: 'Message',
                fullWidth: true,
                multiLine: true,
            },
        ],
    ];

    return (
        <>
            <Navbar />
            <section>
                <Stack
                    direction='column'
                    style={{
                        marginTop: matches ? '60px' : '30px',
                        marginBottom: matches ? '60px' : '30px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    spacing={matches ? 5 : 2}
                >
                    <Stack
                        direction={matches ? 'row' : 'column'}
                        style={{
                            margin: '10px',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        spacing={matches ? 8 : 5}
                        alignItems="center"
                    >
                        {/* <div>
                            {textFields.map((row, rowIndex) => (
                                <Stack
                                    key={rowIndex}
                                    direction={matches ? 'row' : 'column'}
                                    alignItems="center"
                                    spacing={3}
                                >
                                    {row.map((textField, colIndex) => (
                                        <React.Fragment key={textField.id}>
                                            <TextField
                                                id={textField.id}
                                                label={textField.label}
                                                variant="standard"
                                                multiline={textField.multiLine}
                                                maxRows={textField.multiLine ? 4 : 1}
                                                sx={{
                                                    ...(textField.width && {
                                                        width: textField.width,
                                                    }),
                                                    ...(textField.fullWidth && {
                                                        width: '100%',
                                                    }),
                                                }}
                                            />
                                            {colIndex < row.length - 0 && (
                                                <div style={{ marginBottom: matches ? '120px' : '50px' }} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Stack>
                            ))}
                        </div> */}

                        <div>
                            <Stack
                                direction="column"
                                spacing={matches ? 10 : 2}
                                style={{
                                    width: matches ? '100%' : 'auto', // Adjust 'auto' as needed
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Stack
                                    direction={matches ? 'row' : 'column'}
                                    spacing={matches ? 8 : 2}
                                >
                                    <TextField
                                        id="standard-basic"
                                        label="First Name"
                                        variant={matches ? 'standard' : 'outlined'}
                                        sx={{
                                            width: matches ? '200%' : '350px',
                                            [`& fieldset`]: {
                                                borderRadius: 5
                                            }
                                        }}
                                    />

                                    <TextField
                                        id="standard-basic"
                                        label="Last Name"
                                        variant={matches ? 'standard' : 'outlined'}
                                        sx={{
                                            width: matches ? '200%' : '350px',
                                            [`& fieldset`]: {
                                                borderRadius: 5
                                            }
                                        }}
                                    />
                                </Stack>

                                <Stack
                                    direction={matches ? 'row' : 'column'}
                                    spacing={matches ? 8 : 2}
                                >
                                    <TextField
                                        id="standard-basic"
                                        label="Email"
                                        variant={matches ? 'standard' : 'outlined'}
                                        sx={{
                                            width: matches ? '200%' : '350px',
                                            [`& fieldset`]: {
                                                borderRadius: 5
                                            }
                                        }}
                                    />

                                    <TextField
                                        id="standard-basic"
                                        label="Phone Number"
                                        variant={matches ? 'standard' : 'outlined'}
                                        sx={{
                                            width: matches ? '200%' : '350px',
                                            [`& fieldset`]: {
                                                borderRadius: 5
                                            }
                                        }}
                                    />
                                </Stack>

                                <TextField
                                    id="standard-basic"
                                    label="Message"
                                    variant={matches ? 'standard' : 'outlined'}
                                    multiline
                                    fullWidth
                                    maxRows={4}
                                    sx={{
                                        width: matches ? '100%' : '100%',
                                        [`& fieldset`]: {
                                            borderRadius: 5
                                        }
                                    }}
                                />

                                {matches ? submitButtonFlase : submitButtonTrue}
                            </Stack>
                        </div>

                        <Card
                            className="bg-primary-color"
                            sx={{
                                backgroundColor: '#176B87',
                                borderRadius: 5,
                                padding: '50px 20px 50px 20px'

                            }}
                        >
                            <CardContent>
                                <Stack
                                    direction="column"
                                    spacing={8}
                                >
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            justifyItems: 'center'
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            color="white"
                                            style={{
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Contact Information
                                        </Typography>
                                    </div>

                                    {contactInfo.map((info, index) => (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            spacing={5}
                                            alignItems="center"
                                        >
                                            {info.icon}
                                            <Typography
                                                variant="body1"
                                                color="white"
                                                style={{
                                                    fontFamily:
                                                        'Montserrat, sans-serif',
                                                    fontWeight: 'normal',
                                                }}
                                                className="mb-5"
                                            >
                                                {info.text}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                    {matches ? submitButtonTrue : submitButtonFlase}
                </Stack>
            </section>

            <footer style={{ marginTop: 'auto' }}>
                <Footer />
            </footer>
        </>
    );
}

ContactUs.useClient = true;
