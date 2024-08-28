import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FormList from './components/FormList';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

const App = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  const handleAddForm = () => {
    navigate('/feedback/new'); // Navigate to the new feedback form route
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <div className="App">
      <h1>Ajio Sale</h1>
      <button onClick={handleAddForm}>Open form</button>
      <Routes>
        <Route path="/" element={<FormList forms={forms} onDelete={handleDeleteForm} />} />
        <Route path="/feedback/new" element={<FeedbackForm />} />
        <Route path="/feedback/:id" element={<FeedbackForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
