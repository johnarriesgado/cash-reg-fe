import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from 'axios';

const CartPage = () => {
  const { id } = useParams();
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/carts/${id}`)
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!cart) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <div className="cart-container">
        <div className="cart-header">
          <h1>Cart #{cart.id}</h1>
          <button onClick={() => navigate(`/cart/${id}/add-item`)}>Add Item</button>
        </div>

        {cart.items.length === 0 ? (
          <p className="cart-empty">This cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.items.map((code, idx) => (
              <li key={idx}>{code}</li>
            ))}
          </ul>
        )}

        <div className="cart-total">Total: ${cart.total}</div>
      </div>
    </Layout>
  );
};

export default CartPage;