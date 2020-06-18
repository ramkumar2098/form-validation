import React from 'react';
import style from './Detail.module.css';

function Input({ type, myType, id, value, setValue, errorMessage }) {
  const border = () => (errorMessage ? { border: '2px solid #d93025' } : null);

  return (
    <input
      type={myType || type}
      id={id}
      value={value}
      className={style.input}
      style={border()}
      onChange={e => setValue(e.target.value)}
    />
  );
}

export default Input;
