import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';

import Footer from './components/common/Footer';
import AppRoutes from './Approutes';

class App extends Component {
  
  render() {
   
    return (
     <div>
        <Navbar></Navbar>
        <AppRoutes />    
        <Footer></Footer>
     </div>
    );
  }
}

export default App;
