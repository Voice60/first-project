import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
  <header className={styles.header}>
    <img src="https://pngicon.ru/file/uploads/ucrainec.png" className={styles.logo}></img>
    <p className={styles.siteName}>українська соціальна мережа</p>
  </header>
  );
}

export default Header;