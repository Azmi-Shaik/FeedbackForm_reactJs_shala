import React, { useState } from 'react';
import StarRating from './StarRating';
import SmileRating from './SmileRating';
import TextArea from './TextArea';
import NumericalRating from './NumericalRating';
import SingleLineInput from './SingleLineInput';
import './FeedbackForm.css'; // Ensure this path is correct

const FeedbackForm = () => {
  const [form, setForm] = useState({
    starRating: '',
    smileRating: '',
    textArea: '',
    numericalRating: '',
    singleLineInput: '',
  });

  const handleChange = (field) => (value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add logic to save or process the form data
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div style={{ marginBottom: '20px' }}>
        <StarRating
          label="How likely would you star this sale?"
          value={form.starRating}
          onChange={handleChange('starRating')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <SmileRating
          label="What's your reaction on this?"
          value={form.smileRating}
          onChange={handleChange('smileRating')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextArea
          label="Comment your thoughts about this sale:"
          value={form.textArea}
          onChange={handleChange('textArea')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <NumericalRating
          label="How likely would you recommend this to your family and friends?"
          value={form.numericalRating}
          onChange={handleChange('numericalRating')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <SingleLineInput
          label="Do you have any suggestion for us to improve our service?"
          value={form.singleLineInput}
          onChange={handleChange('singleLineInput')}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
