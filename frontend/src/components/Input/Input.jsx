import React from 'react';
import './Input.css';

function Input({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="custom-input-container">
      {label && <label className="custom-input-label">{label}</label>}
      <input
        className="custom-input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
