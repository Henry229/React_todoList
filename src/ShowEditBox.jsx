import React from 'react';
import styles from './ShowEditBox.module.css';

const ShowEditBox = ({ item, setItem, submit }) => {
  return (
    <section className='container'>
      <form className={styles.checkForm} onSubmit={submit}>
        <input
          type='text'
          value={item}
          onChange={(e) => setItem(() => e.target.value)}
          className={styles.checkInput}
        ></input>
        <button className={styles.valueBtn}>Edit</button>
      </form>
    </section>
  );
};

export default ShowEditBox;
