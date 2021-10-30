// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhU3zfFURKb4m9z-6GHAP4-ubeReloAuI",
  authDomain: "chat-app-41c78.firebaseapp.com",
  projectId: "chat-app-41c78",
  storageBucket: "chat-app-41c78.appspot.com",
  messagingSenderId: "715814261288",
  appId: "1:715814261288:web:6cb93f0d01cfab71af9b1d",
  measurementId: "G-MJDYRQSL24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);

export default db;
