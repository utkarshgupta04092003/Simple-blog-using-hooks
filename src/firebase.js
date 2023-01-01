
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYAzLUeudBhHPNEqNcGGNZxKoFmawbigY",
  authDomain: "react-hooks-blog-e189f.firebaseapp.com",
  projectId: "react-hooks-blog-e189f",
  storageBucket: "react-hooks-blog-e189f.appspot.com",
  messagingSenderId: "144720158710",
  appId: "1:144720158710:web:4c934db328ac9dc3f8f1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

