import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { compose } from 'redux';

import Preloader from './components/common/preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Error } from './components/Error/Error';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/LoginContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/Users';
import ChatPage from './pages/Chat/ChatPage';
import { initializeApp } from './redux/appReducer';
import store from './redux/store';

import './App.css';
import 'antd/dist/antd.css';

const { Content, Sider } = Layout;

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
        <Layout style={{minHeight: '100vh'}}>
          <HeaderContainer />
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Nav />
            </Sider>
            <Layout className='layout'>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                }}
              >
                <Route path='/dialogs'
                  render={() => <ChatPage />} />
                <Route path='/login'
                  render={() => <Login />} />
                <Route path='/profile/:userId?'
                  render={() => <ProfileContainer />} />
                <Route path='/users'
                  render={() => <Users />} />
                <Route exact path='/'
                  render={() => <Redirect to='/profile' />} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
        {/* Error component needs for alert an error of the same App's part */}
        <Error />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppWrap = compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppWrap />
      </Provider>
    </React.StrictMode>
  )
}

export default MainApp

