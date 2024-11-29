// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-92068.firebaseapp.com",
  projectId: "mern-blog-92068",
  storageBucket: "mern-blog-92068.firebasestorage.app",
  messagingSenderId: "1091458183124",
  appId: "1:1091458183124:web:fd66323df2cff5cce9b041",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
