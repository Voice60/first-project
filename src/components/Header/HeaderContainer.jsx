import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/auth-redusers';
import AppHeader from './Header';

class HeaderContainer extends React.Component {
  render() {
    return <AppHeader {...this.props} />
  }
}

const mapStateToProps = (state) => (
  {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
  }
)
export default connect(mapStateToProps, { logout })(HeaderContainer);