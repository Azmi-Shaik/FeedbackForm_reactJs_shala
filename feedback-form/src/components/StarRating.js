import React, { useState } from 'react';

const StarRating = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={handleChange}>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star{star > 1 ? 's' : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StarRating;
