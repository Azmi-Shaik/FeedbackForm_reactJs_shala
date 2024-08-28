import { db } from '../utils/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const formCollectionRef = collection(db, 'forms');

export const createForm = async (formData) => {
  return await addDoc(formCollectionRef, formData);
};

export const getForms = async () => {
  const data = await getDocs(formCollectionRef);
  return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const updateForm = async (id, updatedData) => {
  const formDoc = doc(db, 'forms', id);
  return await updateDoc(formDoc, updatedData);
};

export const deleteForm = async (id) => {
  const formDoc = doc(db, 'forms', id);
  return await deleteDoc(formDoc);
};
