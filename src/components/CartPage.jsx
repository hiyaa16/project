import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cart, total }) => {
  const navigate = useNavigate();

  const cartItems = Object.values(cart || {});

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-info">
                  <strong>{item.name}</strong> (x{item.quantity})
                </div>
                <div className="item-price">₹{item.price * item.quantity}</div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>

          <button className="confirm-btn" onClick={() => navigate('/confirm')}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
