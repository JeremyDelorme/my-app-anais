import { Stripe } from '@stripe/stripe-js';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface NavbarProps {
    stripePromise: Promise<Stripe | null>;
}

const NavbarComponent: React.FC<NavbarProps> = ({ stripePromise }) => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#d0d1e2' }}> {/* Lyla background color */}
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    Home
                </Typography>
                <Typography variant="h6" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit', ml: 3 }}>
                    About
                </Typography>
                <Typography variant="h6" component={Link} to="/shop" sx={{ textDecoration: 'none', color: 'inherit', ml: 3 }}>
                    Shop
                </Typography>
                <Typography variant="h6" component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit', ml: 3 }}>
                    Contact
                </Typography>
                <IconButton color="inherit" component={Link} to="/cart" sx={{ ml: 3 }}>
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavbarComponent;
