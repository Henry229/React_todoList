import React, { useState } from 'react';
import styles from './App.module.css';
import ShoppingList from './ShoppingList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  const [editFlag, setEditFlag] = useState('');
  let updated;

  const submit = (e) => {
    e.preventDefault();

    if (editFlag) {
      items.map((list, index) => {
        if (list.id === editFlag) {
          updated = [...items];
          updated[index] = { id: list.id, item };
        }
      });
      setItems(updated);
      setEditFlag('');
      setItem('');
      return;
    }

    console.log(item);
    setItems([{ id: uuidv4(), item }, ...items]);
    setItem('');
  };

  const editItem = (id) => {
    const edited = items.find((item) => item.id === id);
    setItem(edited.item);
    setEditFlag(id);
  };

  const deleteItem = (id) => {
    setItems(() => items.filter((item) => item.id !== id));
  };

  return (
    <section className={styles.container}>
      <h1>To Do List</h1>
      <form className={styles.form} onSubmit={submit}>
        <input
          type='text'
          value={item}
          className={`${styles.input} ${
            editFlag ? styles.editInput : styles.justInput
          }`}
          onChange={(event) => setItem(() => event.target.value)}
          placeholder='eg. workout'
        />
        <button
          type='submit'
          className={`${styles.subBtn} ${
            editFlag ? styles.editBtn : styles.submitBtn
          }`}
        >
          {editFlag ? 'Edit' : 'Submit'}
        </button>
      </form>
      <ShoppingList items={items} editItem={editItem} deleteItem={deleteItem} />
      <button className={styles.allClearBtn}>Clear All items</button>
    </section>
  );
};

export default App;
