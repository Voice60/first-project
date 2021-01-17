import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img src="https://pngicon.ru/file/uploads/ucrainec.png" className={styles.logo}></img>
        <p className={styles.siteName}>українська соціальна мережа</p>
      </div>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login :  <NavLink to='/login'>Login</NavLink>}
      </div>

    </header>
  );
}

export default Header;