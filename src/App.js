import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile'
import Groups from './components/Groups/Groups';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="mainWrap">
        <Header />
        <Nav />
        <div className="mainWrap-content">
          <Route path='/dialogs'
            render={() => <DialogsContainer store={props.store} />} />
          <Route path='/profile'
            render={() => <Profile store={props.store} />} />
          <Route path='/groups'
            render={() => <Groups />} />
          <Route path='/music'
            render={() => <Music />} />
          <Route path='/settings'
            render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
//чики брики

export default App;

