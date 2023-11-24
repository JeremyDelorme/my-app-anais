import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Handle cases where stripe or elements are null
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            // Handle case where cardElement is null
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error(error);
                // Handle the error (e.g., display to the user)
            } else {
                // Payment method created successfully
                console.log('PaymentMethod', paymentMethod);
                // Process the payment
            }
        } catch (error) {
            console.error('Error', error);
            // Handle the error (e.g., display to the user)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Pay</button>
        </form>
    );
};

export default CheckoutForm;
