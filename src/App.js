import { Route, Routes } from "react-router";
import "./App.css";
import Details from "./Components/ProductDetails/Details";

import Home from "./Components/Home/Home";
import Cart from "./Components/Checkout/Cart";
import Payment from "./Components/OrderConfirmation/Payment";
import About from "./Components/AboutUs/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:ID" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
