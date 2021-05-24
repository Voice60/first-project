import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { follow, unfollow } from '../../redux/usersReducer';
import styles from './User.module.scss';

const { Title } = Typography;

const User = ({ user }) => {
  const followingInProgress = useSelector(state => state.usersPage.followingInProgress)
  const dispatch = useDispatch()
  return <div key={user.id} className={styles.item}>
    <NavLink to={'/profile/' + user.id}>
      {user.photos.small === null
        ? <Avatar size={100} style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
        : <img src={user.photos.small} alt="User" />}
    </NavLink>
    <div className={styles.info}>
      <NavLink to={'/profile/' + user.id}>
        <Title level={5}>{user.name}</Title>
      </NavLink>
      {user.followed
        ? <Button disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => { dispatch(unfollow(user.id)) }}> Unfollow</Button>
        : <Button type="primary"
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => { dispatch(follow(user.id)) }}> Follow</Button>}
    </div>
  </div>
}

export default User;