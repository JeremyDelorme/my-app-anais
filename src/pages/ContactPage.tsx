import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

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
            <form onSubmit={handleSubmit}>
                <TextField label="Email Address" variant="outlined" fullWidth sx={{ mt: 3 }} />
                <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                    Subscribe
                </Button>
            </form>
        </Container>
    );
};

export default ContactPage;
