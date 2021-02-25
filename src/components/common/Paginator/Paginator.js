import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
  const spanStyle = { cursor: 'pointer' }
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    {pages.map(page => {
      return <span style={spanStyle}
        className={`${currentPage === page && styles.selected}`}
        onClick={() => { onPageChanged(page) }}>{page}</span>
    })}
  </div>
}

export default Paginator;