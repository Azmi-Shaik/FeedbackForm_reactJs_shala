import React from 'react';

const TextArea = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={handleChange} />
    </div>
  );
};

export default TextArea;
