import React from 'react';
import styles from './DialogsItem.module.css'
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={styles.dialogsItem} activeClassName={styles.activeLink}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsItem;