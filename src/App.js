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
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="mainWrap">
        <Header />
        <Nav />
        <div className="mainWrap-content">
          <Route path='/dialogs'
            render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
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

