import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import DynamicInput from './Layout/Dynamic';

const App = () => {
  return (
    <div>
      <Header/>
      <DynamicInput />
      <Footer />
    </div>
  );
}

export default App;

