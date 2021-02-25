import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import styles from './User.module.css';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unfollow, usersPage, ...props}) => {
    return <div className={styles.usersPage}>
    <Paginator currentPage={currentPage} 
    onPageChanged={onPageChanged} 
    totalUsersCount={totalUsersCount} 
    pageSize={pageSize} />
    {usersPage.map(user => 
      <User user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>
    )}
  </div>
}

export default Users;