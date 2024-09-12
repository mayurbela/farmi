import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Product from "./Product";
import Dairydon from "./components/Product2/Dairydon";
import Poultry from "./components/Product2/Poultry";
import Meat from "./components/Product2/Meat";
import Fruits from "./components/Product2/Fruits";
import Vegetable from "./components/Product2/Vegetable";
import Spices from "./components/Product2/Spices";
import Cereals from "./components/Product2/Cereals";
import Pulses from "./components/Product2/Pulses";
import Dryfruit from "./components/Product2/Dryfruit";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import Cart from "./components/Home/Cart";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<h1>hello</h1>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>


        <Route path="/product/milk" element={<Dairydon />} />
        <Route path="/product/poultry" element={<Poultry/>} />
        <Route path="/product/meat" element={<Meat/>} />

        <Route path="/product/fruits" element={<Fruits/>} />
        <Route path="/product/vegetable" element={<Vegetable/>} />
        <Route path="/product/spices" element={<Spices/>} />
        <Route path="/product/cereals" element={<Cereals/>} />
        <Route path="/product/pulses" element={<Pulses/>} />
        <Route path="/product/dryfruit" element={<Dryfruit/>} />
        

      </Routes>
    </Router>
  );
}

export default App;
