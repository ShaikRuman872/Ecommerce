// src/components/ProductCard.js
import { useNavigate } from 'react-router-dom';

import './ProductCard.css'

function ProductCard({ product, openModal }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>
      <button onClick={() => navigate(`/thank-you/${product.name}`)} className='home-button btn btn-primary'>
        View Product
      </button>
      <button onClick={() => openModal(product)} className='home-button btn btn-primary'>Add to Cart</button>
    </div>
  );
}

export default ProductCard;