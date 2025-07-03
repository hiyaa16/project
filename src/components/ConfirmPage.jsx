import React, { useState } from "react";
import "./ConfirmPage.css";

const ConfirmPage = ({ cart }) => {
  const [user, setUser] = useState({ name: "", phone: "", paymentMode: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      user,
      cart,
      createdAt: new Date(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("✅ Order placed successfully!");
        setUser({ name: "", phone: "", paymentMode: "" });
      } else {
        setMessage("❌ Error: " + result.message);
      }
    } catch (err) {
      setMessage("❌ Network error.");
    }
  };

  return (
    <div className="confirm-page">
      <div className="confirm-box">
        <h2>🧾 Confirm Your Order</h2>
        <form onSubmit={handleSubmit} className="confirm-form">
          <input
            type="text"
            placeholder="Your Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            maxLength="10"
          />

          <select
            value={user.paymentMode}
            onChange={(e) => setUser({ ...user, paymentMode: e.target.value })}
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="UPI">UPI</option>
          </select>
          <button type="submit" className="confirm-btn">
            Place Order
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ConfirmPage;
