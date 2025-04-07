import React from 'react';
import Product from './Product';

const products = [
  {
    id: 1,
    title: 'Black Winter Jacket',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: 499,
    rating: 4.5,
    image: 'url_to_image_1',
  },
  {
    id: 2,
    title: 'Mens Starry Shirt',
    description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
    price: 399,
    rating: 4.2,
    image: 'url_to_image_2',
  },
  // Añade más productos aquí
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;