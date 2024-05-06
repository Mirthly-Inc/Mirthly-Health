import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2kaj9et2pEMlAWDjyLxXAozanJLMiYr4",
  authDomain: "gen-lang-client-0058932291.firebaseapp.com",
  projectId: "gen-lang-client-0058932291",
  storageBucket: "gen-lang-client-0058932291.appspot.com",
  messagingSenderId: "869791161424",
  appId: "1:869791161424:web:5d75bc55cea098dd9fc555",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = (
  email: string,
  password: string,
  name: string,
  age: string
) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserData(
        user.uid,
        name,
        age,
        [{ shortform: "", longform: "" }],
        [{ exercise_name: "", exercise_description: "" }]
      );
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });

export const setUserData = async (
  id: string,
  name: string,
  age: string,
  sleep: [{}],
  stress: [{}]
) => {
  await setDoc(doc(db, "Mirthly-Health", id), {
    age: age,
    name: name,
    sleep: [{ sleep_level: "" }],
    stress: [{ stress_level: "" }],
    tasks: [
      {
        shortform: "",
        longform: [],
      },
    ],
    flag: false,
    exercise: [{ exercise_name: "", exercise_description: "" }],
  });
};

export const fetchAll = async (userid: string) => {
  const docRef = doc(db, "Mirthly-Health", userid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const updatedata = async (userid: string, analysis: any) => {
  try {
    const docRef = doc(db, "Mirthly-Health", userid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    let new_stress = [];
    if (data?.stress[0].stress_level === "") {
      new_stress = [{ stress_level: analysis.stress_level }];
    } else {
      new_stress = [...data?.stress, { stress_level: analysis.stress_level }];
    }
    let new_sleep = [];
    if (data?.sleep[0].sleep_level === "") {
      new_sleep = [{ sleep_level: analysis.sleep_level }];
    } else {
      new_sleep = [...data?.sleep, { sleep_level: analysis.sleep_level }];
    }
    const new_task = analysis.tasks;
    const new_exercise = analysis.exercise;
    await updateDoc(docRef, {
      stress: new_stress,
      sleep: new_sleep,
      tasks: new_task,
      exercise: new_exercise,
      flag: true,
    });
    const newsnap = await getDoc(docRef);
    console.log(newsnap.data());
  } catch (error) {
    console.log(error);
  }
};

// const name = doc(db, 'name');
// const nameQuery = async () => {
//   await getDoc(name);
// };
// const age = doc(db, 'age');
// const ageQuery = async () => {
//   await getDoc(age);
// };

// console.log('Document data:', nameQuery.data());
// console.log('Document data:', ageQuery.data());

// const sleep = await getDocs(collection(db, 'sleep'));
// sleep.forEach((doc) => {
//   console.log(doc.id, ' => ', doc.data());
// });
// const stress = await getDocs(collection(db, 'stress'));
// stress.forEach((doc) => {
//   console.log(doc.id, ' => ', doc.data());
// });
// const avgSleep = sleep.reduce((sum, dat) => sum + dat) / sleep.length;
// const avgStress = sleep.reduce((sum, dat) => sum + dat) / sleep.length;
