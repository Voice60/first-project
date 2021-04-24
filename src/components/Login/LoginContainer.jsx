import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-redusers'
import Login from './Login'

export const LoginContainer = (props) => {
  return (
    <Login {...props} />
  )
}

const mapStateToProps = (state) => ({
  captchaURL: state.auth.captchaURL,
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, { login })(LoginContainer)
