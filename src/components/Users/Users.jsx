import { Pagination } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers, setCurrentPage } from '../../redux/usersReducer';
import User from './User';
import styles from './User.module.scss';
import UsersSearchForm from './UsersSearchForm';

const Users = () => {
  const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount)
  const currentPage = useSelector(state => state.usersPage.currentPage)
  const pageSize = useSelector(state => state.usersPage.pageSize)
  const users = useSelector(state => state.usersPage.users)
  const term = useSelector(state => state.usersPage.term)
  const friendFilter = useSelector(state => state.usersPage.friendFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, term, friendFilter))
  }, [currentPage, pageSize, term, friendFilter])

  return <div >
    <UsersSearchForm />
    <Pagination current={currentPage}
      total={totalUsersCount}
      pageSize={pageSize}
      showSizeChanger={false}
      onChange={(page) => { dispatch(setCurrentPage(page)) }}
      defaultCurrent={1}
    ></Pagination>
    <div className={styles.usersList}>
      {users.map(user =>
        <User key={user.id} user={user} />
      )}
    </div>
  </div>
}

export default Users
