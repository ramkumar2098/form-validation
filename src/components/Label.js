import React from 'react';

function Label({ id, label }) {
  return <label htmlFor={id}>{label}</label>;
}

export default Label;
