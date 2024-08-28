import React, { useState } from 'react';

const NumericalRating = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        min="1"
        max="10"
        onChange={handleChange}
      />
    </div>
  );
};

export default NumericalRating;
