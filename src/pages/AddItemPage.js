import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from 'axios';

const AddItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        const unique = Array.from(new Map(res.data.map(p => [p.code, p])).values());
        setProducts(unique);
      })
      .catch(err => console.error(err));
  }, []);

  const selectedProduct = products.find(p => p.code === productCode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post(`/api/carts/${id}/cart_items`, {
        product_code: productCode,
        quantity: quantity,
      });
      navigate(`/cart/${id}`);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h1 className="form-title">Add Item to Cart #{id}</h1>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <label className="form-label">Product</label>
            <select
              className="form-input"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              required
            >
              <option value="">-- Select Product --</option>
              {products.map(product => (
                <option key={product.code} value={product.code}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {selectedProduct && (
            <div className="form-detail">
              <p><strong>Code:</strong> {selectedProduct.code}</p>
              <p><strong>Price:</strong> ${selectedProduct.price}</p>
            </div>
          )}

          <div>
            <label className="form-label">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="form-input"
              min="1"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit">Add</button>
            <button type="button" className="secondary" onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddItemPage;
