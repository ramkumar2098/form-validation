import React from 'react';
import ShowPasswordIcon from './ShowPasswordIcon';
import HidePasswordIcon from './HidePasswordIcon';

function PasswordIcon({ showPasswordIcon, changeInputType }) {
  return (
    <span style={{ cursor: 'pointer' }} onClick={changeInputType}>
      {showPasswordIcon ? <ShowPasswordIcon /> : <HidePasswordIcon />}
    </span>
  );
}

export default PasswordIcon;
