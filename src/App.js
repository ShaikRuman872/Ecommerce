// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import ThankYouPage from './pages/ThankYouPage';

import './styles.css'; // Import CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/thank-you/:productName" element={<ThankYouPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
