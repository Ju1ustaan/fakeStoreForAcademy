import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import React, { useState } from 'react'



const App = () => {
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/content" element={<Content setCartItems={setCartItems} cartItems={cartItems}/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
