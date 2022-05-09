import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../../assets/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../utils/UserContext";
import { loginUser } from "../utils/api";
import { Button, HelperText, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  const [email, setEmail] = useState(""); //update from [username, setUsername]
  const [password, setPassword] = useState("");
  const [emailOrPassError, setEmailOrPassError] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });

  // const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const onLoginPressed = async () => {
    //Refactored - see api.js for details
    try {
      if (!email) {
        setEmailOrPassError({
          type: "error",
          visible: true,
          message: "Please enter an email address.",
        });
        return;
      }
      if (!password) {
        setEmailOrPassError({
          type: "error",
          visible: true,
          message: "Please enter a password.",
        });
        return;
      }
      const user = await loginUser(email, password);
      setEmail("");
      setPassword("");
      setUser(user);
    } catch (err) {
      setEmailOrPassError({
        type: "error",
        visible: true,
        message: err.message,
      });
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

  // const onLoginFacebook = () => {};

  // const onLoginGoogle = () => {};

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.root}>
          <Image source={Logo} style={styles.logo} />
          <HelperText
            type={emailOrPassError.type}
            visible={emailOrPassError.visible}
            style={{ alignSelf: "center" }}
          >
            {emailOrPassError.message}
          </HelperText>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Button
            mode="contained"
            style={styles.button}
            onPress={onLoginPressed}
          >
            Login
          </Button>
          <Button
            mode="text"
            onPress={onForgotPasswordPressed}
            color="red"
            style={styles.textButton}
          >
            Forgot Password?
          </Button>
          <Button
            mode="text"
            onPress={onSignUpPressed}
            style={styles.textButton}
          >
            Create An Account
          </Button>
          {/* <>{emailOrPassError ? <Text> {emailOrPassError} </Text> : null}</>

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
/> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-start",
    paddingTop: 30,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  logo: {
    height: 250,
    width: 300,
    alignSelf: "center",
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
});

export default LoginScreen;
