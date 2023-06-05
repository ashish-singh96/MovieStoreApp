// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQtI-bOOmPyBcWB6sQM36WDPPgqPpM_M",
  authDomain: "moviestore-bf62a.firebaseapp.com",
  projectId: "moviestore-bf62a",
  storageBucket: "moviestore-bf62a.appspot.com",
  messagingSenderId: "809633612643",
  appId: "1:809633612643:web:098e621c45aa97fd5ec956"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movie");

export default app;