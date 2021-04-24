import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './ProfileDataForm.module.css'

let ProfileDataForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <label>
        fullName:
      <Field name="fullName" component="input" type="text" />
      </label>
    </div>

    <div>
      <label>
        About Me:
      <Field name="AboutMe" component="textarea" type="text" />
      </label>
    </div>

    <div>
      <label>
        Looking for a job:
      <Field name="lookingForAJob" component="input" type="checkbox" />
      </label>
    </div>

    <div>
      <label>
        Looking for a job Discription:
      <Field name="lookingForAJobDescription" component="textarea" type="text" /></label>
    </div>


    {Object.keys(props.profile.contacts).length && Object.keys(props.profile.contacts).map(el => {
      return <div key={el}>
        <label>
          <b>{el}</b>: <Field name={'contacts.' + el} component="input" type="text" />
        </label>
      </div>

    })}
    <button>Save</button>
    {props.error && <div className={styles.formError}>{props.error}</div>}
  </form>
}

let ProfileDataFormWrap = reduxForm({
  form: 'profileData'
})(ProfileDataForm)

export default ProfileDataFormWrap