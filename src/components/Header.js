// src/components/Header.js
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { FaLeaf } from "react-icons/fa";
import './Header.css'

function Header() {
  return (
    <header className="header-bg">
      <div className="icons-left">
        <FaUser size={24} />
      </div>
     
      <p className='nav-head'> Chaperone <FaLeaf /> </p>
      
     
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <FaSearch className="search-icon" />
      </div>

      <div className="icons-right">
        <FaShoppingCart size={24} />
      </div>
    </header>
  );
}

export default Header;
