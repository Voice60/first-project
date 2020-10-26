import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import Groups from './components/Groups/Groups';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <div className="mainWrap">
        <Header />
        <Nav />
        <div className="mainWrap-content">
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/groups' component={Groups} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
//чики брики

export default App;

