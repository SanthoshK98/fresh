import logo from './logo.svg';
import './App.css';

import {useState,useEffect} from 'react'
import axios from 'axios'
import Product from './Components/Product';
import{Link,Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart';
import Navbars from './Components/Navbars';
function App() {

 
console.log("new Changes")
console.log("second new Changes")


  

  return (
    <>
    <Navbars/>
    <Routes>
  <Route path='/products' element={<Product/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
 

    </>
  );

  }


export default App;
