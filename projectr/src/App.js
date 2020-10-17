import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
const App = () => {
  return (
    <div className="mainWrap"> 
      <Header />
      <Nav />
      <Main />
    </div>
  );
} 

export default App;

