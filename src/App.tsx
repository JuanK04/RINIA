import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/login/login';
import SignIn from './auth/sign-in/signIn';
import Home from './pages/home/home';
import Tienda from './pages/tienda/tienda';
import ProductDetail from "./pages/tienda/ProductDetail";
import Carrito from "./pages/tienda/Carrito";
import Checkout from "./pages/tienda/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;