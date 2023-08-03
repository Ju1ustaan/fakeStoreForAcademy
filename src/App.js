import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import React from 'react'



const App = () => {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/content" element={<Content />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
