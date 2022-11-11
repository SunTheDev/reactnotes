// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHbrCjfgf78mlPI_xNK-Ck398VqiaYRzw",
  authDomain: "react-social-project-b8312.firebaseapp.com",
  projectId: "react-social-project-b8312",
  storageBucket: "react-social-project-b8312.appspot.com",
  messagingSenderId: "149283921954",
  appId: "1:149283921954:web:747e796b11fd83077a2a7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
