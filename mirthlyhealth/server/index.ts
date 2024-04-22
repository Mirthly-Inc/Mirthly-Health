import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD70YB2b2kW5Q9pofO1fvItemlXLFfcHI0",
  authDomain: "windowsassistant-8db02.firebaseapp.com",
  projectId: "windowsassistant-8db02",
  storageBucket: "windowsassistant-8db02.appspot.com",
  messagingSenderId: "312940286579",
  appId: "1:312940286579:web:a5b36dd4693ba279819006",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const login = (email, password, name, age) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserData(user.uid, name, age);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const setUserData = async (id, name, age) => {
  await setDoc(doc(db, "Mirthly-Health", id), {
    age: age,
    name: name,
    sleep: [],
    stress: [],
  });
};
