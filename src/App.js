import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
   const getData = async () => {
     let {data} = await axios(`https://fakestoreapi.com/products`)
     setProducts(data)
   }
   getData()
  }, [])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home products={products}/>}/>
          <Route path="/content" element={<Content products={products}/>}/>
          <Route path="/about" element={<About products={products}/>}/>
          <Route path="/contacts" element={<Contacts products={products}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
