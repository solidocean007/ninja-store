import React from "react";
import './InputBase.css';

const InputBase = ({ name, value, ...props}) => (
  <label>
    <input className="input-root" type="text" name={name} value={value} {...props}/>
  </label>
) 

export default InputBase;