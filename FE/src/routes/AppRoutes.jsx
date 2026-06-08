import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CategoryPage from "../pages/category";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";







const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/blogs" element={<Blog />} />

     <Route path="/faq" element={<FAQ />} />

<Route path="/contact" element={<Contact />} />

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