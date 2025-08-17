// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFckeOHfIXaZGke4b0Hi8W60bXptZ8QyE",
  authDomain: "talktest-d7f7b.firebaseapp.com",
  projectId: "talktest-d7f7b",
  storageBucket: "talktest-d7f7b.firebasestorage.app",
  messagingSenderId: "398625835050",
  appId: "1:398625835050:web:6d7ec49dfa98c56ebe1b53",
  measurementId: "G-ZQ10XE4LQH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);