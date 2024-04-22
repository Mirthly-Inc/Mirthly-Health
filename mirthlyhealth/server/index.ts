import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { User } from 'lucide-react';

const firebaseConfig = {
  apiKey: 'AIzaSyD70YB2b2kW5Q9pofO1fvItemlXLFfcHI0',
  authDomain: 'windowsassistant-8db02.firebaseapp.com',
  projectId: 'windowsassistant-8db02',
  storageBucket: 'windowsassistant-8db02.appspot.com',
  messagingSenderId: '312940286579',
  appId: '1:312940286579:web:a5b36dd4693ba279819006',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const login = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const setUserData = async (user) => {
  await setDoc(doc(db, 'Mirthly-Health', user.uid), {
    dob: user.dob,
    name: user.name,
  });
};
