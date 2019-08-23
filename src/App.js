import React, { Component } from 'react';
//import './App.css';
import HomePage from "./pages/home"
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/HeaderComponent';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar/>
        <HomePage/>
      </div>

    </BrowserRouter>
  );
}

export default App;
