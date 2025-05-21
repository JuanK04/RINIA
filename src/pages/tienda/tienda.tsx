import React from 'react';
import ProductList from './ProductList';
import './Tienda.css'; // Asegúrate de tener styles en este archivo.

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Rinia</h1>
        <input type="text" placeholder="Search any Product..." />
      </header>
      <h2>52,082+ Items</h2>
      <ProductList />
      <footer className="footer">
        <nav className="bottom-nav">
          <div className="nav-item">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </div>
          <div className="nav-item">
            <i className="fas fa-heart"></i>
            <span>Wishlist</span>
          </div>
          <div className="nav-item cart">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="nav-item">
            <i className="fas fa-search"></i>
            <span>Search</span>
          </div>
          <div className="nav-item">
            <i className="fas fa-cog"></i>
            <span>Setting</span>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;