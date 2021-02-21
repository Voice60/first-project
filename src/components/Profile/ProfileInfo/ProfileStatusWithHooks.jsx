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
        ? <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
        : <span onClick={activateEditMode}>{status || '------'}</span>}
    </div >
  )
}

export default ProfileStatusWithHooks