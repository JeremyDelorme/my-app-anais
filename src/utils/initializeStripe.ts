import { loadStripe } from '@stripe/stripe-js';

const initializeStripe = async () => {
    const stripePromise = await loadStripe('pk_test_51OCmZRGcxzGP8SdkGSSqfqbJ8ndBdxxenBlmY0Zynx76RRQo7mbQlc3Lb6Mur0JvVA39GBqssTaNypxCVGlYrjfB00754nLwFr');
    return stripePromise;
};

export default initializeStripe;
