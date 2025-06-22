const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const fetchCarts = async () => {
  const res = await fetch(`${API_BASE}/carts`);
  return res.json();
};

export const createCart = async () => {
  const res = await fetch(`${API_BASE}/carts`, {
    method: 'POST',
  });
  return res.json();
};

export const fetchCart = async (id) => {
  const res = await fetch(`${API_BASE}/carts/${id}`);
  return res.json();
};

export const addItemToCart = async (cartId, productId, quantity) => {
  const res = await fetch(`${API_BASE}/carts/${cartId}/cart_items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product_id: productId, quantity }),
  });
  return res.json();
};
