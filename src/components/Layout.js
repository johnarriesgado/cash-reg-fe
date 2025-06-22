import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <nav className="mb-6 text-sm text-gray-600 flex gap-2 items-center">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">🏠 Home</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
