import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { auth, db } from "../../firebase";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { UserContext } from "../utils/UserContext";
import { useNavigation } from "@react-navigation/native";
import { signUpUser } from "../utils/api";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const onRegisterPressed = async () => {
    try {
      if (password !== passwordRepeat) {
        setError("Passwords do not match!");
        return;
      }
      if (!username) {
        setError("Please enter a display name!");
        return;
      }
      if (!email) {
        setError("Please enter your email address.");
        return;
      }
      if (!password) {
        setError("Password must be at least 6 characters!");
        return;
      }

      //Refactored - see api.js for details

      const userData = await signUpUser(username, email, password);
      setUser(userData);
      navigation.navigate("Homepage");
    } catch (err) {
      setError(err.message);
    }

    //----------OLD CODE BELOW----------
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     return setDoc(doc(db, "users", email), {
    //       username: username,
    //     });
    //   })
    //   .then(() => {
    //     const docRef = doc(db, "users", email);
    //     return getDoc(docRef);
    //   })
    //   .then((docSnap) => {
    //     setUser(docSnap.data());
    //     navigation.navigate("Homepage");
    //   })
    //   .catch((err) => {
    //     switch (err.code) {
    //       case "auth/invalid-email":
    //         setError("Invalid email!");
    //         break;
    //       case "auth/email-already-in-use":
    //         setError("Email is already in use!");
    //         break;
    //       case "auth/weak-password":
    //         setError("Password must be at least 6 characters!");
    //         break;
    //     }

    //     // setError("fire base error");
    //   });
  };

  const onLoginFacebook = () => {};

  const onLoginGoogle = () => {};

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account!</Text>
        <>{error === "" ? null : <Text> {error} </Text>}</>
        <CustomInput
          placeholder="Display Name"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <CustomButton
          text="Sign Up with Facebook"
          onPress={onLoginFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign Up with Google"
          onPress={onLoginGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 60,
    backgroundColor: "rgba(100, 20, 200, 0.4)",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  logo: {
    width: "90%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#051C60",
    margin: 4,
  },
  text: {
    color: "grey",
    marginVertical: 30,
  },
  link: {
    color: "#489CF9",
  },
});

export default SignUpScreen;
