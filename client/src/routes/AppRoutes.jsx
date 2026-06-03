import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CategoryPage from "../pages/category";
import ProductDetails from "../pages/ProductDetails";


const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<div>About</div>} />

      <Route path="/portfolio" element={<div>Portfolio</div>} />

      <Route path="/blogs" element={<div>Blogs</div>} />

      <Route path="/faq" element={<div>FAQ</div>} />

      <Route path="/contact" element={<div>Contact</div>} />

     <Route
  path="/category/:slug"
  element={<CategoryPage />}
/>
<Route
  path="/product/:id"
  element={<ProductDetails />}
/>
</Routes>
  );
};

export default AppRoutes;