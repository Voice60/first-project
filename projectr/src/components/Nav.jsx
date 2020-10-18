import React from 'react';
import c from './Nav.module.css'

const Nav = () => {
  return (
  <nav className={c.nav}>
    <ul>
      <li><a>Profile</a></li>
      <li><a>Messages</a></li>
      <li><a>Groups</a></li>
      <li><a>Music</a></li>
      <li><a>Sittings</a></li>
    </ul>
  </nav>
  );
}

export default Nav;