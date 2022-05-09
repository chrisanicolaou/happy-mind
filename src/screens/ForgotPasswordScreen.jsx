import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { resetPassword } from "../utils/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, HelperText, TextInput } from "react-native-paper";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({
    type: "info" || "error",
    visible: false,
    message: "",
  });
  const navigation = useNavigation();

  const onResetPress = async () => {
    //Refactored - see api.js for details
    try {
      await resetPassword(email);
      setMessage({
        type: "info",
        visible: true,
        message: "Success! Please check your email.",
      });
    } catch (err) {
      setMessage({
        type: "error",
        visible: true,
        message: err.message,
      });
    }

    //----------OLD CODE BELOW----------
    // try {
    //   await sendPasswordResetEmail(auth, email);
    //   setMessage("Success! Please check your email.");
    // } catch (err) {
    //   switch (err.code) {
    //     case "auth/missing-email":
    //       setMessage("You haven't entered an email!");
    //       break;
    //     case "auth/invalid-email":
    //       setMessage("Please enter a valid email address.");
    //       break;
    //     case "auth/user-not-found":
    //       setMessage("That user doesn't appear to exist!");
    //       break;
    //   }
    // }
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.root}>
          <Image
            source={require("../../assets/forgot-password.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <HelperText
            type={message.type}
            visible={message.visible}
            style={{ alignSelf: "center" }}
          >
            {message.message}
          </HelperText>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
          />
          <Button mode="contained" style={styles.button} onPress={onResetPress}>
            Send Reset Link
          </Button>
          <Button
            mode="text"
            onPress={onSignInPressed}
            style={styles.textButton}
          >
            Back To Login
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-start",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    marginTop: "10%",
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
