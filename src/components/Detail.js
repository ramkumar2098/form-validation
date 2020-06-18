import React, { useState } from 'react';
import Label from './Label';
import Input from './Input';
import PasswordIcon from './PasswordIcon';
import ErrorMessage from './ErrorMessage';
import style from './Detail.module.css';

function Detail(props) {
  const [showPasswordIcon, setShowPasswordIcon] = useState(true);
  const [myType, setMyType] = useState('');

  const changeInputType = () => {
    setShowPasswordIcon(!showPasswordIcon);
    myType === 'text' ? setMyType('password') : setMyType('text');
  };

  return (
    <div className={style.detail}>
      <Label {...props} />
      <Input {...props} myType={myType} />
      {props.type === 'password' && (
        <PasswordIcon
          showPasswordIcon={showPasswordIcon}
          changeInputType={changeInputType}
        />
      )}
      {props.errorMessage && <ErrorMessage {...props} />}
    </div>
  );
}

export default Detail;
