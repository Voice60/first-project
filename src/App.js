import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Groups from './components/Groups/Groups';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { getMe, logout } from './redux/auth-redusers';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Component } from 'react';
import { initializeApp } from './redux/appReducer';
import { initialize } from 'redux-form';
import Preloader from './components/common/preloader/Preloader';
class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="mainWrap">
          <HeaderContainer />
          <Nav />
          <div className="mainWrap-content">
            <Route path='/dialogs'
              render={() => <DialogsContainer />} />
            <Route path='/login'
              render={() => <Login />} />
            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/groups'
              render={() => <Groups />} />
            <Route path='/music'
              render={() => <Music />} />
            <Route path='/settings'
              render={() => <Settings />} />
            <Route path='/users'
              render={() => <Users />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

