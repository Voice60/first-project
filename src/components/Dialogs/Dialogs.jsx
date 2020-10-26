import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialogs.module.css';
const DialogsItem = (props) => {
  return (
    <div className={c.dialogsItem} activeClassName={c.activeLink}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={c.dialogsPage}>
      <div className={c.searchMenu}>

      </div>
      <div className={c.dialogsList}>
        <ul>
          <li>
            <DialogsItem name='Колька' id="1" />
          </li>
          <li>
            <DialogsItem name='Пенчик' id="2" />
          </li>
          <li>
            <DialogsItem name='Кирюша' id="3" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dialogs;