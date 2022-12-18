import React from 'react';
import styles from './ShoppingList.module.css';

const ShoppingList = ({ items, editItem, deleteItem }) => {
  return (
    <ul className={styles.items}>
      {items.map((list) => (
        <li key={list.id} className={styles.item}>
          <span className={styles.span}>{list.item}</span>
          <div className={styles.buttonGroup}>
            <button
              className={styles.editBtn}
              onClick={() => editItem(list.id)}
            >
              <i className='fas fa-edit'></i>
            </button>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteItem(list.id)}
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
