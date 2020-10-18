import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
const App = () => {
  return (
    <div className="mainWrap"> 
      <Header />
      <Nav />
      <Main />
    </div>
  );
} 
//чики брики

export default App;

