import { useState } from 'react';
import './Carrito.css';

const Carrito = () => {
  const [size, setSize] = useState(42);
  const [quantity, setQuantity] = useState(1);
  const deliveryDate = '10 May 2XXX';
  const totalAmount = 7000.00;

  return (
    <div className="shopping-bag">
      <header>
        <h1>Rinia</h1>
        <input type="text" placeholder="Search any Product..." />
      </header>
      
      <h1>Carrito de Compras</h1>
      <div className="product-details">
        <img 
          src="" // Reemplaza con la URL de la imagen del producto
          alt="Product"
          className="product-image"
        />
        <div className="product-info">
          <h2>Ropa Casual Mujer</h2>
          <p>Blazer de cuadros con botonadura sencilla</p>
          <div className="product-options">
            <label>Talla: 
              <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
                <option value={42}>42</option>
                <option value={44}>44</option>
                {/* Agrega más opciones de tamaño según sea necesario */}
              </select>
            </label>
            <label>Cantidad: 
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                min="1"
              />
            </label>
          </div>
          <p>Entrega para: {deliveryDate}</p>
        </div>
      </div>

      <button className="coupon-button">Aplica tu Cupon</button>

      <div className="order-summary">
        <h3>Detalles de pago del Pedido</h3>
        <p>Monto del Pedido: $ {totalAmount.toFixed(2)}</p>
        <p>
          Conveniencia: 
          <button className="details-button">Saber Más</button>
          
        </p>
        <p>Envío: Gratis</p>
        <h4>Total de la Orden: $ {totalAmount.toFixed(2)}</h4>
        <p>EMI Available: <button className="details-button">Detalles</button></p>
      </div>

      <div className="total-amount">
        <h2>$ {totalAmount.toFixed(2)}</h2>
        <button className="proceed-button">Procede al Pago</button>
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

export default Carrito;
