import { Button, Layout, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
const { Text } = Typography;
const { Header } = Layout;

const AppHeader = (props) => {
  return (
    <Header className={styles.header}>
      <p onClick={() => window.location.reload()} className={styles.siteName}>Social Web</p>
      {props.isAuth
        ? <div className={styles.profileInfo}><Text className = { styles.profileName } strong><NavLink to='/profile'>{props.login}</NavLink></Text>
          <Button onClick={props.logout} type="primary" danger>Logout</Button></div>
        : <Button ghost><NavLink to='/login'>Login</NavLink></Button>}
    </Header>
  );
}
export default AppHeader;