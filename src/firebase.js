import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8_ZvJcXIW9k_Qoi2GhTncnZoVTlILxaw",
    authDomain: "chirp-16-02.firebaseapp.com",
    projectId: "chirp-16-02",
    storageBucket: "chirp-16-02.appspot.com",
    messagingSenderId: "393800645769",
    appId: "1:393800645769:web:45c8c75a4633f4f0ff5a58",
    measurementId: "G-1CNKCJL4ZC"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { app, db };