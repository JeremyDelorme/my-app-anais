import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import ButtonComponent from '../components/ButtonComponent';

const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color="primary" mt={5}>
                Contact Us
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" color="primary" align="center">
                        Have a question or just want to get in touch? Fill out the form below, and we'll get back to you as soon as possible.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Your Name" variant="outlined" fullWidth sx={{ mt: 3 }} />
                        <TextField label="Email Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
                        <TextField label="Message" multiline rows={4} variant="outlined" fullWidth sx={{ mt: 2 }} />
                        <ButtonComponent>Submit</ButtonComponent> {/* Provide the text inside ButtonComponent */}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" color="primary" align="center" sx={{ mt: { xs: 4, md: 0 } }}>
                        Our Address:
                        <br />
                        123 Gallery Street,
                        <br />
                        City Name,
                        <br />
                        Country
                        <br />
                        <br />
                        Email: contact@example.com
                        <br />
                        Phone: +123456789
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default ContactPage;
