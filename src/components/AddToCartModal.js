// src/components/AddToCartModal.js
import React, { useState } from 'react';

import './AddToCartModal.css';

function AddToCartModal({ product, isOpen, closeModal }) {
    const [quantity, setQuantity] = useState(1);
    if (!isOpen || !product) return null;


  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Minimum quantity is 1
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) setQuantity(value);
  };



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='modal-heading'>{product.name}</h2>
        <img src={product.image} alt={product.name} className="modal-image" />
        <p>Price :  Rs {product.price}</p>

        <div className="quantity-selector">
          <button className="quantity-btn" onClick={decrementQuantity}>-</button>
          <input 
            type="number" 
            value={quantity} 
            onChange={handleQuantityChange} 
            min="1"
            
          />
          <button className="quantity-btn" onClick={incrementQuantity}>+</button>
        </div>

        <div className="modal-buttons">
          <button className="btn" onClick={closeModal}>Cancel</button>
          <button className="btn btn-primary">Confirm </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;
