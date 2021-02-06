import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { getMe } from '../../redux/auth-redusers';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMe()
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => (
  {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
  }
)

export default connect(mapStateToProps, { getMe })(HeaderContainer);