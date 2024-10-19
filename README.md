## E-commerce Listing Page

  * Project Overview
        This is an e-commerce product listing page built with ReactJS. The page displays a grid of products with options to view product details or add them to the cart. There is no dedicated product page; instead, users are redirected to a Thank You page upon clicking "View Product." The "Add to Cart" button triggers a modal with product details, and the page supports pagination.

    * Features
        -> Product Listing: Displays products in a 4-column layout.
        -> View Product: Redirects users to a Thank You page.
        -> Add to Cart: Opens a modal with product details.
        -> Pagination: Allows users to navigate through multiple pages of products.
        -> Search Bar: Search functionality to filter products (mocked).
        -> Responsive Design: Works well on desktop and mobile.
        
    * Usage Instructions

        => View Product:

           1. On the product listing page, click "View Product" to see the Thank You page, which displays the product name dynamically.
            Add to Cart:

           2. Click "Add to Cart" to open the modal with product details. Confirm to simulate adding the product to the cart.
            Pagination:

           3. Use the pagination controls to navigate through multiple pages of products.
            Search Bar:

           4. Enter a product name in the search bar to filter the product list (mocked for now).

    * Dependencies

            1. ReactJS: Frontend framework.
            2. React Router: For handling routing between pages.
            3. React Icons: For icons in the modal and other components.
            4. CSS: Styling for layout and components.
    
    * Challenges Faced
    
            -> State Management: Managing the state between modal and product listing required careful handling with useState and useNavigate.
            -> Dynamic Routing: Passing product details using React Router’s state prop.