// src/pages/ProductListing.js
import { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';
import products from '../data/products'; 

function ProductListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);
  const productsPerPage = 8; // Adjust this to show 8 products per page

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <Header />
      <div className="product-list">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} openModal={openModal} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      <AddToCartModal product={modalProduct} closeModal={closeModal} isOpen={!!modalProduct}/>
    </div>
  );
}

export default ProductListing;