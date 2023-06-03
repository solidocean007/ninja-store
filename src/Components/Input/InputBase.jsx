import React from 'react';
import './InputBase.css';

function InputBase({ value, onChange, placeholder, type = 'text', className = '', name, error, ...restProps }) {
  return (
    <div>
      <input
        className={`input-base ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
      <div>{error}</div>
    </div>
  );
}

export default InputBase;

