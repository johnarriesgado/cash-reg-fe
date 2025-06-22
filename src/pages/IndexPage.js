import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const IndexPage = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/carts')
      .then(res => setCarts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCreateCart = async () => {
    const res = await axios.post('/api/carts');
    const newCart = res.data;
    navigate(`/cart/${newCart.id}`);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Baskets</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleCreateCart}>Add Cart</button>
      </div>
      <div className="overflow-x-auto">
        <div className="table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Cart</th>
                <th>Items</th>
                <th>Total</th>
              </tr>
            </thead>
          </table>
          <div className="scroll-body">
            <table className="cart-table">
              <tbody>
                {carts.map(cart => (
                  <tr key={cart.id}>
                    <td>
                      <strong>
                        <Link to={`/cart/${cart.id}`} className="text-blue-500 underline">
                          Cart #{cart.id}
                        </Link>
                      </strong>
                    </td>
                    <td>{(cart.items || []).join(", ")}</td>
                    <td>${cart.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;