import React from 'react';
import c from './Header.module.css'

const Header = () => {
  return (
  <header className={c.header}>
    <img src="https://pngicon.ru/file/uploads/ucrainec.png" className={c.logo}></img>
    <p>українська соціальна мережа</p>
  </header>
  );
}

export default Header;