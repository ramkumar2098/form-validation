import React from 'react';
import style from './Detail.module.css';

function Label({ id, label }) {
  return (
    <label htmlFor={id} className={style.label}>
      {label}
    </label>
  );
}

export default Label;
