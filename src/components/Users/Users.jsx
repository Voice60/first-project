import { Pagination } from 'antd';
import React from 'react';
import styles from './User.module.scss'
import User from './User';

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unfollow, usersPage }) => {
  return <div >
    <Pagination onChange={onPageChanged}
      total={totalUsersCount}
      pageSize={pageSize}
      showSizeChanger={false}
    ></Pagination>
    <div className={styles.usersList}>
      {usersPage.map(user =>
        <User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />
      )}
    </div>
  </div>
}

export default Users;