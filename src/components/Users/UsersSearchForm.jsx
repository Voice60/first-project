import { Cascader, Input, InputNumber, Select } from 'antd'
import Form from 'antd/lib/form/Form'
import { Option } from 'antd/lib/mentions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setFriendFilter, setPageSize, setTerm } from '../../redux/usersReducer'

const UsersSearchForm = () => {

  const term = useSelector(state => state.usersPage.term)
  const friendFilter = useSelector(state => state.usersPage.friend)
  const pageSize = useSelector(state => state.usersPage.pageSize)

  const dispatch = useDispatch()

  return (
    <div>
      <Input value={term} onChange={(e) => { dispatch(setTerm(e.target.value)) }} placeholder='Search' />
      <Select value={friendFilter} onChange={(value) => { dispatch(setFriendFilter(value)) }} placeholder='filter'>
        <Option value={null}>All</Option>
        <Option value={true}>Friends</Option>
        <Option value={false}>Not friends</Option>
      </Select>
      <InputNumber placeholder='Page Size' min={4} max={100} value={pageSize} onChange={(value) => { dispatch(setPageSize(value)) }} />
    </div>
  )
}

export default UsersSearchForm
