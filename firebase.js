import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNfIZ4Il01pReguV7AU4GK0bwz6HT6yzY",
  authDomain: "happy-mind-80be6.firebaseapp.com",
  projectId: "happy-mind-80be6",
  storageBucket: "happy-mind-80be6.appspot.com",
  messagingSenderId: "797682667487",
  appId: "1:797682667487:web:01c1a87c50eac53e1dfe6a",
  measurementId: "G-JJ4S8W84L5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
