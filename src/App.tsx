import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { CartProvider, userCartContext } from "./context/CartContext";

import ReactContent from "./components/HOC/ReactContent";
import HomePage from "./pages/template/home/HomePage";
import ProductsPage from "./pages/shop/products/ProductsPage";
import DashboardPage from "./pages/template/dashboard/DashboardPage";
import AboutPage from "./pages/template/about/AboutPage";
import NavbarComponent from "./components/navbar/Navbar";
const App = () => {
  return (
    <CartProvider>
      <ReactContent>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </ReactContent>
    </CartProvider>
  );
};

export default App;
