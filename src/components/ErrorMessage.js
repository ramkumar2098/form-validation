import React from 'react';
import ErrorIcon from './ErrorIcon';
import style from './Detail.module.css';

function ErrorMessage({ errorMessage }) {
  return (
    <div className={style.error}>
      <ErrorIcon />
      <span className={style.errorMessage}>{errorMessage}</span>
    </div>
  );
}

export default ErrorMessage;
