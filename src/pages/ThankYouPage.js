// src/pages/ThankYouPage.js
import { useLocation, Link } from 'react-router-dom';
import './ThankYouPage.css'; // Import CSS


function ThankYouPage() {
  const location = useLocation();
  const productName = location.state?.productName || 'our product!';

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1>Thank You!</h1>
        <p>We appreciate your interest in <strong>{productName}</strong>.</p>
        <p>Explore more products or proceed to your cart!</p>
        <div className="thank-you-buttons">
          <Link to="/" className="btn">Back to Home</Link>
          <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
