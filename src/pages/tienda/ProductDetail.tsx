import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="image-container">
        <img src="path/to/image.jpg" alt="Nike Sneakers" />
      </div>
      <div className="size-options">
        <p>Talla:</p>
        <div className="sizes">
          <span>26 mx</span>
          <span className="selected">27 mx</span>
          <span>28 mx</span>
          <span>29 mx</span>
          <span>30 mx</span>
        </div>
      </div>
      <h2>Nike Sneakers</h2>
      <div className="ratings">
        <span>★★★★☆</span>
        <span>56,890</span>
      </div>
      <div className="price">
        <p>2,999</p>
        <p className="discounted-price">1,500</p>
        <p className="discount">50% OFF</p>
      </div>
      <div className="product-details">
        <p>Detalles de producto</p>
        <p>
        Quizás la zapatilla más icónica de todos los tiempos, esta original combinación de colores "Chicago"
        es la piedra angular de cualquier colección de zapatillas...
        </p>
      </div>
      <div className="actions">
        <button className="go-to-cart">Carrito</button>
        <button className="buy-now">Comprar</button>
      </div>
      <div className="delivery-info">
        <p>Entrega en 2 dias</p>
      </div>
      <div className="similar-items">
        <h3>Productos similares 282+ Items</h3>
        <div className="similar-product">
          <img src="path/to/similar-product1.jpg" alt="Similar Product 1" />
          <p>Nike Air Jordan Retro 1 Low Mystic Black</p>
          <span>1,900</span>
          <span>★★★★☆ 46,890</span>
        </div>
        <div className="similar-product">
          <img src="path/to/similar-product2.jpg" alt="Similar Product 2" />
          <p>Zapatos moca para hombre</p>
          <span>1,900</span>
          <span>★★★★☆ 2,56,890</span>
        </div>
      </div>
      <div className="bottom-actions">
        <button>Wishlist</button>
        <button>Compara</button>
        <button>Ajustes</button>
      </div>

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

export default ProductDetail;