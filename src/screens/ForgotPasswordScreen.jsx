import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { resetPassword } from "../utils/api";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const onResetPress = async () => {
    //Refactored - see api.js for details
    try {
      await resetPassword(email);
      setMessage("Success! Please check your email.");
    } catch (err) {
      setMessage(err.message);
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
    <View style={styles.root}>
      <>{message === "" ? null : <Text>{message}</Text>}</>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomButton text="Send Reset Link" onPress={onResetPress} />
      <CustomButton
        text="Back to sign in"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 80,
    backgroundColor: "rgba(100, 20, 200, 0.4)",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
