import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Map from './Map.js';
import Register from './Register.js';
import Login from './Login.js';
import Contact from './Contact.js';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/><br/><br/><br/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<div></div>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
        
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
