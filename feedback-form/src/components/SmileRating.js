import React, { useState } from 'react';

const SmileRating = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={handleChange}>
        <option value="1">😊</option>
        <option value="2">😐</option>
        <option value="3">😠</option>
      </select>
    </div>
  );
};

export default SmileRating;
