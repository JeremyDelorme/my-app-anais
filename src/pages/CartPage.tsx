import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const CartPage = () => {
    // Add your cart logic or display content as per your requirement

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color="primary" mt={5}>
                Your Cart
            </Typography>
            {/* Add your cart details or content */}
            <Button variant="contained" color="primary">
                Checkout
            </Button>
        </Container>
    );
};

export default CartPage;
