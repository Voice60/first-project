import { message } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getError } from '../../redux/errorSelectors'

export const Error = (props) => {
  const errorMessage = useSelector(getError)
  useEffect(() => {
    errorMessage && message.error(errorMessage)
  }, [errorMessage])
  return (
    <>
    </>
  )
}
