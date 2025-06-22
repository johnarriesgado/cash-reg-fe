import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import CartPage from './pages/CartPage';
import AddItemPage from './pages/AddItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="/cart/:id/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
