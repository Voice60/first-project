import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setIsFetching } from '../../redux/auth-redusers';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          this.props.setAuthUserData(id, login, email)
          this.props.setIsFetching(false)
        }

      })
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

export default connect(mapStateToProps, { setAuthUserData, setIsFetching })(HeaderContainer);