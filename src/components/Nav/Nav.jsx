import { Menu } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  // let isCurrentPageProfile = {}

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{
        height: '100%', 
        borderRight: 0,
        overflow: 'auto',
        position: 'fixed',
        left: 0,
        marginTop: '64px',
        maxWidth: '200px'

      }}
    >
      <Menu.Item key="1">
        <NavLink to='/profile'>Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/dialogs'>Messages</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/users'>Users</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default Nav;