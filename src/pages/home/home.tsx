import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Rinia</h1>
        <input type="text" placeholder="Search any Product..." />
      </header>

      <section className="featured-section">
        <h2>All Featured</h2>
        <div className="sort-filter">
          <button>Sort</button>
          <button>Filter</button>
        </div>
        <div className="categories">
          {['Beauty', 'Fashion', 'Kids', 'Mens', 'Womens'].map((category) => (
            <span key={category} className="category">{category}</span>
          ))}
        </div>
      </section>

      <section className="promotions">
        <div className="promotion-banner">
          <h3>50-40% OFF</h3>
          <p>Now in (product) All colours</p>
          <button>Shop Now →</button>
        </div>

        <div className="deal-of-the-day">
          <h3>Deal of the Day</h3>
          <p>22h 55m 20s remaining</p>
          <div className="product">
            <h4>Women Printed Kurta</h4>
            <p>1500</p>
            <span className="offer">40% OFF</span>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h3>Special Offers</h3>
        <p>We make sure you get the offer you need at the best prices</p>
      </section>

      

      <section className="new-arrivals">
        <h3>New Arrivals</h3>
        <p>Summer' 25 Collections</p>
      </section>

      <section className="sponsored">
        <h3>Sponsored</h3>
        <p>Up to 50% OFF</p>
      </section>

      
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
}


export default Home;
