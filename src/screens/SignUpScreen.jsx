import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";

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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, HelperText, TextInput } from "react-native-paper";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(true);
  const [displayNameError, setDisplayNameError] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });
  const [emailError, setEmailError] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });

  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const checkDisplayName = () => {
    if (!username) {
      setDisplayNameError({
        type: "error",
        visible: true,
        message: "Please enter a display name!",
      });
    } else {
      setDisplayNameError({
        type: "error" || "info",
        visible: false,
        message: "",
      });
    }
  };

  const checkEmail = () => {
    if (!email) {
      setEmailError({
        type: "error",
        visible: true,
        message: "Please enter your email address!",
      });
    } else {
      setEmailError({
        type: "error" || "info",
        visible: false,
        message: "",
      });
    }
  };

  const checkPassword = () => {
    if (!password) {
      setPasswordError({
        type: "error",
        visible: true,
        message: "Password must be at least 6 characters!",
      });
    } else if (password !== passwordRepeat) {
      setPasswordError({
        type: "error",
        visible: true,
        message: "Passwords do not match!",
      });
    } else {
      setPasswordError({
        type: "error" || "info",
        visible: false,
        message: "",
      });
    }
  };

  const onRegisterPressed = async () => {
    try {
      if (password !== passwordRepeat) {
        setPasswordError({
          type: "error",
          visible: true,
          message: "Passwords do not match!",
        });
        return;
      }
      if (!username) {
        setDisplayNameError({
          type: "error",
          visible: true,
          message: "Please enter a display name!",
        });
        return;
      }
      if (!email) {
        setEmailError({
          type: "error",
          visible: true,
          message: "Please enter your email address!",
        });
        return;
      }
      if (!password) {
        setPasswordError({
          type: "error",
          visible: true,
          message: "Password must be at least 6 characters!",
        });
        return;
      }

      //Refactored - see api.js for details

      const user = await signUpUser(username, email, password);
      setUser(user);
    } catch (err) {
      setEmailError({
        type: "error",
        visible: true,
        message: err.message,
      });
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
    //         setEmailError("Invalid email!");
    //         break;
    //       case "auth/email-already-in-use":
    //         setEmailError("Email is already in use!");
    //         break;
    //       case "auth/weak-password":
    //         setEmailError("Password must be at least 6 characters!");
    //         break;
    //     }

    //     // setEmailError("fire base emailError");
    //   });
  };

  const onLoginFacebook = () => {};

  const onLoginGoogle = () => {};

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.root}>
          <HelperText
            type={displayNameError.type}
            visible={displayNameError.visible}
            style={{ alignSelf: "center" }}
          >
            {displayNameError.message}
          </HelperText>
          <TextInput
            label="Display Name"
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
            onBlur={checkDisplayName}
          />
          <HelperText
            type={emailError.type}
            visible={emailError.visible}
            style={{ alignSelf: "center" }}
          >
            {emailError.message}
          </HelperText>
          <TextInput
            label="Email"
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
            onBlur={checkEmail}
          />
          <HelperText
            type={passwordError.type}
            visible={passwordError.visible}
            style={{ alignSelf: "center" }}
          >
            {passwordError.message}
          </HelperText>
          <TextInput
            label="Password"
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            onBlur={checkPassword}
            secureTextEntry={showPassword}
            right={
              <TextInput.Icon
                name={showPassword ? "eye" : "eye-off"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          <TextInput
            label="Repeat Password"
            style={styles.textInput}
            onChangeText={(text) => setPasswordRepeat(text)}
            onBlur={checkPassword}
            secureTextEntry={showPasswordRepeat}
            right={
              <TextInput.Icon
                name={showPasswordRepeat ? "eye" : "eye-off"}
                onPress={() => setShowPasswordRepeat(!showPasswordRepeat)}
              />
            }
          />
          <Button
            mode="contained"
            style={styles.button}
            onPress={onRegisterPressed}
          >
            Register
          </Button>
          <Button
            mode="text"
            onPress={onSignInPressed}
            style={styles.textButton}
          >
            Back to Login
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
    // <ScrollView>
    //   <View style={styles.root}>
    //     <Text style={styles.title}>Create an Account!</Text>
    //     <>{emailError === "" ? null : <Text> {emailError} </Text>}</>
    //     <CustomInput
    //       placeholder="Display Name"
    //       value={username}
    //       setValue={setUsername}
    //     />
    //     <CustomInput placeholder="Email" value={email} setValue={setEmail} />
    //     <CustomInput
    //       placeholder="Password"
    //       value={password}
    //       setValue={setPassword}
    //       secureTextEntry
    //     />
    //     <CustomInput
    //       placeholder="Repeat Password"
    //       value={passwordRepeat}
    //       setValue={setPasswordRepeat}
    //       secureTextEntry
    //     />
    //     <CustomButton text="Register" onPress={onRegisterPressed} />

    //     <CustomButton
    //       text="Sign Up with Facebook"
    //       onPress={onLoginFacebook}
    //       bgColor="#E7EAF4"
    //       fgColor="#4765A9"
    //     />
    //     <CustomButton
    //       text="Sign Up with Google"
    //       onPress={onLoginGoogle}
    //       bgColor="#FAE9EA"
    //       fgColor="#DD4D44"
    //     />

    //     <CustomButton
    //       text="Have an account? Sign in"
    //       onPress={onSignInPressed}
    //       type="TERTIARY"
    //     />
    //   </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-start",
    paddingTop: 30,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  textInput: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: "75%",
    alignSelf: "center",
    marginTop: "2%",
    marginBottom: "5%",
  },
  textButton: {
    width: "75%",
    alignSelf: "center",
  },
  // logo: {
  //   width: "90%",
  //   maxWidth: 300,
  //   maxHeight: 200,
  // },
  // title: {
  //   fontSize: 26,
  //   fontWeight: "bold",
  //   color: "#051C60",
  //   margin: 4,
  // },
  // text: {
  //   color: "grey",
  //   marginVertical: 30,
  // },
  // link: {
  //   color: "#489CF9",
  // },
});

export default SignUpScreen;
