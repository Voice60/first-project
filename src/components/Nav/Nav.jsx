import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={c.nav}>
      <ul>
        <li className={c.item}>
          <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/dialogs' activeClassName={c.activeLink}>Messages</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/groups' activeClassName={c.activeLink}>Groups</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/music' activeClassName={c.activeLink}>Music</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/settings' activeClassName={c.activeLink}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;