import React from 'react'
import styles from './FormsControls.module.css'

const FormControl = ({ meta: {error, touched}, children }) => {
  const hasError = error && touched

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props

  return (
    <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
  )
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props

  return (
    <FormControl {...props}><input {...restProps} {...input} /></FormControl>
  )
}