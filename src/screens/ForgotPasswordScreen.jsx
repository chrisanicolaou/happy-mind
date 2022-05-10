import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { resetPassword } from "../utils/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, HelperText, TextInput } from "react-native-paper";
import ThemeView from "../components/ThemeView";

const ForgotPasswordScreen = () => {
  // -----STATES-----

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({
    type: "info" || "error",
    visible: false,
    message: "",
  });

  // -----STACK NAVIGATOR-----

  const navigation = useNavigation();

  // -----FUNCTIONS-----

  const onResetPress = async () => {
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
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  // -----RENDER-----

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <ThemeView>
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
            <Button
              mode="contained"
              style={styles.button}
              onPress={onResetPress}
            >
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
        </ThemeView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

// -----STYLES-----

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

export default ForgotPasswordScreen;
