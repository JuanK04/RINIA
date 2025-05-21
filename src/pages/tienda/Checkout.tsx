import './Checkout.css'; // Asegúrate de crear un CSS para estilos

const Checkout = () => {
  const deliveryAddress = {
    address: "216 St Paul's Rd, London N1 2LL, UK",
    contact: "+44-784232"
  };

  const shoppingList = [
    {
      id: 1,
      name: "Ropa informal para Mujer",
      variations: ["Negro"],
      rating: 4.8,
      price: 34.00,
      originalPrice: 64.00,
      discount: "33%",
    },
    {
      id: 2,
      name: "Chaqueta de hombre",
      variations: ["Verde", "Gris"],
      rating: 4.7,
      price: 45.00,
      originalPrice: 67.00,
      discount: "28%",
    }
  ];

  return (
    <div className="checkout-container">
        <header>
        <h1>Rinia</h1>
        <input type="text" placeholder="Search any Product..." />
      </header>

      <h1>Checkout</h1>
      
      <div className="address-section">
        <h2>Delivery Address</h2>
        <p><strong>Domicilio:</strong> {deliveryAddress.address}</p>
        <p><strong>Contacto:</strong> {deliveryAddress.contact}</p>
        <button className="edit-button">Editar</button>
      </div>
      
      <h2>Lista de compra</h2>
      {shoppingList.map(item => (
        <div className="shopping-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>Variacion: {item.variations.join(', ')}</p>
          <p>Rating: {item.rating} ⭐</p>
          <p>Precio: <span className="discounted-price">${item.price.toFixed(2)}</span> <span className="original-price">${item.originalPrice.toFixed(2)} (upto {item.discount} off)</span></p>
          <p><strong>Total de la Orden (1):</strong> ${item.price.toFixed(2)}</p>
        </div>
      ))}

      <div className="total-section">
        <h3>Total:</h3>
        <p>${(shoppingList.reduce((acc, item) => acc + item.price, 0)).toFixed(2)}</p>
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

export default Checkout;
