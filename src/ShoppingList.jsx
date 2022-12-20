import React, { useState } from 'react';
import styles from './ShoppingList.module.css';
import ShowEditBox from './ShowEditBox';

const ShoppingList = ({
  items,
  showBox,
  setShowBox,
  item,
  setItem,
  editItem,
  deleteItem,
  submit,
}) => {
  // const [checkItem, setCheckItem] = useState('');
  return (
    <ul className={styles.items}>
      {items.map((list) => (
        <li key={list.id} className={styles.item}>
          <div className='styles.leftBox'>
            <input
              type='checkbox'
              onClick={() => {
                setShowBox(list.item);
                // console.log(checkItem);
                editItem(list.id);
              }}
              className='styles.checkBox'
            />
            <span className={styles.span}>{list.item}</span>
          </div>
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
      <section className='modal'>
        {showBox && (
          <ShowEditBox item={item} setItem={setItem} submit={submit} />
        )}
      </section>
    </ul>
  );
};

export default ShoppingList;
