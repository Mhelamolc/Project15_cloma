// src/App.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Navbar from './Navbar'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
