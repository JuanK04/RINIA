import React from 'react';

const Product = ({ image, title, description, price, rating }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      <span className="rating">{rating} ★</span>
    </div>
  );
};

export default Product;