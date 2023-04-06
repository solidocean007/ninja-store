import React from 'react';
import './InputBase.css';


function InputBase({ value, onChange, placeholder, type = 'text', className = '', ...restProps }) {
  return (
    <input
      className={`input-base ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
}

export default InputBase;
