import { Input } from 'antd'
import Text from 'antd/lib/typography/Text'
import React, { useState, useEffect } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useState(false)

  return (
    <div>
      {editMode
        ? <Input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status} placeholder="Basic usage" />
        : <Text onClick={activateEditMode} type="secondary">{status || '------'}</Text>}
    </div >
  )
}

export default ProfileStatusWithHooks