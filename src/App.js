import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { initialize } from 'redux-form';

import { compose } from 'redux';

import Preloader from './components/common/preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/LoginContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/UsersContainer';
import { initializeApp } from './redux/appReducer';
import { getMe, logout } from './redux/auth-redusers';
import store from './redux/reduxStore';

import './App.css';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;


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
        <Layout>
          <HeaderContainer />
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Nav />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
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
                  minHeight: 280,
                }}
              >
                <Route path='/dialogs'
                  render={() => <DialogsContainer />} />
                <Route path='/login'
                  render={() => <Login />} />
                <Route path='/profile/:userId?'
                  render={() => <ProfileContainer />} />
                <Route path='/users'
                  render={() => <Users />} />
              </Content>
            </Layout>
          </Layout>
        </Layout>



        <div className="mainWrap">

          <div className="mainWrap-content">

          </div>
        </div>
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

