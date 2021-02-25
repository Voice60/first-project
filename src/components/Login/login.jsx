import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import {login} from "../../redux/auth-redusers";
import { Redirect } from 'react-router-dom'
import styles from '../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)

let LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField, maxLength30]} /></div>
      <div><Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={[requiredField, maxLength30]}/></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={Input} />remember me</div>
      {error && <div className={styles.formError}>{error}</div>}
      <div><button>login</button></div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {
  let onSubmit = (formData) => {props.login(formData.email, formData.password, formData.rememberMe)}

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>LOGINPAGE</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)