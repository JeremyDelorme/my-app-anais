import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import initializeStripe from '../src/utils/initializeStripe';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';

import { Stripe } from '@stripe/stripe-js';

const App = () => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>(Promise.resolve(null));

  useEffect(() => {
    const fetchStripe = async () => {
      const stripe = await initializeStripe();
      setStripePromise(() => stripe ? Promise.resolve(stripe) : Promise.resolve(null));
    };
    fetchStripe();

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDsITubRs-XzL-f-4TODCBfzla7MPhjVaE",
      authDomain: "my-app-anais.firebaseapp.com",
      databaseURL: "https://my-app-anais-default-rtdb.firebaseio.com",
      projectId: "my-app-anais",
      storageBucket: "my-app-anais.appspot.com",
      messagingSenderId: "1015473953482",
      appId: "1:1015473953482:web:ec84064fb16007f17e3233"
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <Router>
      <div>
        <NavbarComponent stripePromise={stripePromise} />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
