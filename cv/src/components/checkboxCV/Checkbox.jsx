// Checkbox.jsx
import React from 'react';
import './Checkbox.css';

const Checkbox = ({ label, value, onChange, checked }) => {

  return (
    <div className="checkbox-container">
      
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          className="checkbox-input"
        />
      
      <span className="label">
        {label}
        </span>
    </div>
  );
};

export default Checkbox;