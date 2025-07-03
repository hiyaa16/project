import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Middle from './components/Middle';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import ConfirmPage from './components/ConfirmPage';
import OurStory from './components/OurStory'; // Import the OurStory component

function App() {
  const [cart, setCart] = useState({});

  // Calculate total cart value
  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* ✅ Pass cart to Navbar so 🛒 shows count */}
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />

        <Route
          path="/menu"
          element={<Middle cart={cart} setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={<CartPage cart={cart} total={total} />}
        />

        <Route
          path="/confirm"
          element={<ConfirmPage cart={cart} />}
        />

        <Route
          path="/our-story"
          element={<OurStory />} // Add the new route for Our Story page
        />
      </Routes>
    </>
  );
}

export default App;