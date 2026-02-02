import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // زدنا هادي للـ Login
import { getFirestore } from "firebase/firestore"; // زدنا هادي للـ Database

const firebaseConfig = {
  // الكود ديالك كيبقى هنا كيفما هو
  apiKey: "AIzaSyD-_89b1iJmtCSzf3Gvl6Mrwf8lwEIUG04", 
  authDomain: "rr-student.firebaseapp.com",
  projectId: "rr-student",
  storageBucket: "rr-student.firebasestorage.app",
  messagingSenderId: "375528204352",
  appId: "1:375528204352:web:da3f7709f49d847779d7a5",
};

// 1. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialize Services (الأدوات ديالنا)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); // هادا هو "المسؤول" على دخول Google