import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../../images/Logo.jpeg";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../utils/UserContext";
import { loginUser } from "../utils/api";

const LoginScreen = () => {
  const [email, setEmail] = useState(""); //update from [username, setUsername]
  const [password, setPassword] = useState("");
  const [emailOrPassError, setEmailOrPassError] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const onLoginPressed = async () => {
    //Refactored - see api.js for details
    try {
      if (!email) {
        setEmailOrPassError("Please enter an email address.");
        return;
      }
      if (!password) {
        setEmailOrPassError("Please enter a password.");
        return;
      }
      const userData = await loginUser(email, password);
      setUser(userData);
      navigation.navigate("Homepage");
    } catch (err) {
      setEmailOrPassError(err.message);
    }

    //----------OLD CODE BELOW----------
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const docRef = doc(db, "users", email);
    //     return getDoc(docRef);
    //   })
    //   .then((docSnap) => {
    //     setUser(docSnap.data());
    //     navigation.navigate("Homepage");
    //   })
    //   .catch((err) => {
    //     console.warn(err.code);
    //     setEmailOrPassError(err.code);
    //   });
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onLoginFacebook = () => {};

  const onLoginGoogle = () => {};

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <>{emailOrPassError ? <Text> {emailOrPassError} </Text> : null}</>

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onLoginPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onLoginFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onLoginGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 50,
    backgroundColor: "rgba(100, 20, 200, 0.4)",
    marginVertical: -40,
  },
  logo: {
    width: "90%",
    maxWidth: "300%",
    maxHeight: "200%",
  },
});

export default LoginScreen;
