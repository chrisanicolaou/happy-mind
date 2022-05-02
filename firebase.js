// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/firebase-auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNfIZ4Il01pReguV7AU4GK0bwz6HT6yzY",
  authDomain: "happy-mind-80be6.firebaseapp.com",
  projectId: "happy-mind-80be6",
  storageBucket: "happy-mind-80be6.appspot.com",
  messagingSenderId: "797682667487",
  appId: "1:797682667487:web:01c1a87c50eac53e1dfe6a",
  measurementId: "G-JJ4S8W84L5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
