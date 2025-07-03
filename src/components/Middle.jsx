import React, { useState } from 'react';
import './Middle.css';

const Middle = ({ cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Espresso',
      desc: 'Strong and bold espresso shot.',
      price: 120,
    },
    {
      id: 2,
      name: 'Cappuccino',
      desc: 'Frothy and smooth cappuccino.',
      price: 150,
    },
    {
      id: 3,
      name: 'Latte',
      desc: 'Smooth blend of espresso and steamed milk.',
      price: 160,
    },
    {
      id: 4,
      name: 'Mocha',
      desc: 'Rich chocolate-flavored coffee with steamed milk.',
      price: 180,
    },
    {
      id: 5,
      name: 'Americano',
      desc: 'Espresso diluted with hot water for a lighter taste.',
      price: 130,
    },
    {
      id: 6,
      name: 'Macchiato',
      desc: 'Espresso with a dash of frothy milk.',
      price: 140,
    },
  ]);

  const [notification, setNotification] = useState('');
  const [newItem, setNewItem] = useState({ name: '', desc: '', price: '' });

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const current = prevCart[item.name] || { ...item, quantity: 0 };
      return {
        ...prevCart,
        [item.name]: {
          ...current,
          quantity: current.quantity + 1,
        },
      };
    });
  };

  const handleRemoveFromCart = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemName]) {
        updatedCart[itemName].quantity--;
        if (updatedCart[itemName].quantity <= 0) {
          delete updatedCart[itemName];
        }
      }
      return updatedCart;
    });
  };

  const handleDeleteFromMenu = (itemId) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== itemId));
    setNotification('Item deleted from menu!');
    setTimeout(() => setNotification(''), 2000);
  };

  const handleAddNewItem = (e) => {
    e.preventDefault();
    const id = Date.now();
    setMenuItems((prev) => [...prev, { ...newItem, id, price: Number(newItem.price) }]);
    setNewItem({ name: '', desc: '', price: '' });
    setNotification('New item added!');
    setTimeout(() => setNotification(''), 2000);
  };

  return (
    <div className="middle-wrapper">
      <section className="menu-section">
        <h2>Our Menu</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="menu-list">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <strong>₹{item.price}</strong>
              </div>
              <div className="menu-actions">
                <button onClick={() => handleAddToCart(item)}>Add</button>
                <button onClick={() => handleRemoveFromCart(item.name)}>Remove</button>
               
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="add-menu-item">
        <h2>Add New Menu Item</h2>
        <form onSubmit={handleAddNewItem}>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newItem.desc}
            onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            required
          />
          <button type="submit">Add Item</button>
        </form>
      </section>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Middle;
