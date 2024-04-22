import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
