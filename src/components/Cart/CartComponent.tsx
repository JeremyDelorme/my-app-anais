import React, { useState } from 'react';
import { Stripe } from '@stripe/stripe-js'; // Import Stripe type

interface CartProps {
    stripePromise: Promise<Stripe | null>;
}

const Cart: React.FC<CartProps> = ({ stripePromise }) => {
    const [stripe, setStripe] = useState<Stripe | null>(null);

    // This useEffect ensures Stripe is loaded before using it
    React.useEffect(() => {
        const fetchStripe = async () => {
            const stripeInstance = await stripePromise;
            setStripe(stripeInstance);
        };
        fetchStripe();
    }, [stripePromise]);

    const handleCheckout = async () => {
        if (stripe) {
            // Use stripe here for checkout logic
        } else {
            console.log('Stripe is not yet loaded');
        }
    };

    return (
        <div>
            {/* Display cart items and total */}
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;
