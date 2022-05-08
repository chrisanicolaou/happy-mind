import { auth, db } from "../../firebase";
import { doc, getDoc, getDocs, setDoc, collection } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  updateEmail,
  signOut,
} from "firebase/auth";

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    return user;
    // const docRef = doc(db, "users", email);
    // const docSnap = await getDoc(docRef);
    // return docSnap.data();
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        throw new Error("Please enter a valid email address.");

      case "auth/user-not-found":
        throw new Error("No account found with that email!");

      default:
        throw new Error("Incorrect email or password.");
    }
  }
};

export const signUpUser = async (username, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    await updateProfile(user, { displayName: username });
    return user;
    // const docRef = doc(db, "users", email);
    // await setDoc(docRef, {
    //   username: username,
    // });
    // const docSnap = await getDoc(docRef);
    // return docSnap.data();
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        throw new Error("Invalid email!");
      case "auth/email-already-in-use":
        throw new Error("Email is already in use!");
      case "auth/weak-password":
        throw new Error("Password must be at least 6 characters!");
    }
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return;
  } catch (err) {
    switch (err.code) {
      case "auth/missing-email":
        throw new Error("You haven't entered an email!");

      case "auth/invalid-email":
        throw new Error("Please enter a valid email address.");

      case "auth/user-not-found":
        throw new Error("That user doesn't appear to exist!");
    }
  }
};

export const fetchHobbiesByInterest = async (interest) => {
  try {
    const hobbiesArr = [];
    const querySnap = await getDocs(collection(db, interest));
    querySnap.forEach((doc) => hobbiesArr.push(doc.data()));
    return hobbiesArr;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchExercises = async (workoutDifficulty, workoutType) => {
  try {
    const exercisesArr = [];
    const docRef = doc(db, workoutDifficulty, workoutType);
    const docSnap = await getDoc(docRef);
    const docObj = docSnap.data();
    for (let exercise in docObj) {
      exercisesArr.push(docObj[exercise]);
    }
    return exercisesArr;
  } catch (err) {
    throw new Error(err);
  }
};

export const setDisplayName = async (user, displayName) => {
  try {
    if (user.displayName === displayName) {
      throw new Error("This is already your display name!");
    }
    await updateProfile(user, { displayName: displayName });
  } catch (err) {
    console.log(err.code);
  }
};

export const setPassword = async (user, password) => {
  try {
    await updatePassword(user, password);
  } catch (err) {
    switch (err.code) {
      case "auth/weak-password":
        throw new Error("Password must be at least 6 characters!");
    }
  }
};

export const setEmail = async (user, email) => {
  try {
    await updateEmail(user, email);
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        throw new Error("Invalid email!");
    }
  }
};

export const logUserOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
