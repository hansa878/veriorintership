import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './redux/cartSlice';

const products = [
  { id: 1, name: 'Shirt', price: 30 },
  { id: 2, name: 'Jeans', price: 45 },
  { id: 3, name: 'Shoes', price: 60 },
];

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  return (
    <div style={{
      backgroundColor: '#f4f4f8',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333' }}>🛍️ Shopping Cart</h1>

      {/* Product Cards */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '20px',
            width: '150px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
          }}>
            <h3 style={{ color: '#444' }}>{product.name}</h3>
            <p style={{ color: '#666' }}>${product.price}</p>
            <button
              onClick={() => dispatch(addItem(product))}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart Items */}
      <h2 style={{ color: '#333' }}>🧺 Cart Items</h2>
      {items.length === 0 ? (
        <p style={{ color: '#777' }}>No items in cart.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '400px', width: '100%' }}>
          {items.map((item, index) => (
            <li key={index} style={{
              backgroundColor: '#fff',
              padding: '10px 15px',
              marginBottom: '10px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}>
              <span>{item.name} - ${item.price}</span>
              <button
                onClick={() => dispatch(removeItem(item))}
                style={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  padding: '6px 10px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      <h2 style={{
        marginTop: '20px',
        color: '#222',
        backgroundColor: '#e0ffe0',
        padding: '10px 20px',
        borderRadius: '8px'
      }}>
        💰 Total: ${total}
      </h2>
    </div>
  );
};

export default App;
