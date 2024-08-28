// src/components/FormDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

function FormDetail() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchForm = async () => {
      const docRef = doc(db, 'forms', id);
      const formDoc = await getDoc(docRef);
      setForm(formDoc.data());

      const submissionsCollection = await getDocs(collection(db, `forms/${id}/submissions`));
      setSubmissions(submissionsCollection.docs.map(doc => doc.data()));
    };

    fetchForm();
  }, [id]);

  if (!form) return <div>Loading...</div>;

  return (
    <div>
      <h1>{form.title}</h1>
      <p>Created At: {form.createdAt.toDate().toLocaleString()}</p>
      <h2>Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>{JSON.stringify(submission)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormDetail;
