import React from 'react';
import  './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Dialogs from './components/Dialogs/Dialogs';
const App = () => {
  return (
    <div className="mainWrap"> 
      <Header />
      <Nav />
      {/* <div className="c.content">
        <Main />
      </div> */}
      <div className="mainWrap-content">
        <Dialogs />
      </div>
    </div>
  );
} 
//чики брики

export default App;

