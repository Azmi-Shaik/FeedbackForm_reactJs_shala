import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getForms } from '../api/formApi';
import FeedbackModal from '../components/FeedbackModal';

const Feedback = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      const forms = await getForms();
      const foundForm = forms.find((f) => f.id === id);
      setForm(foundForm);
    };
    fetchForm();
  }, [id]);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    // Handle form submission logic here
  };

  return (
    <div>
      {form ? (
        <FeedbackModal form={form} onSubmit={handleFormSubmit} onClose={() => {}} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Feedback;
