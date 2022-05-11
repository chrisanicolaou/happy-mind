import React, { useState, useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Logo from "../../assets/app-logo.png";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../utils/UserContext";
import { loginUser } from "../utils/api";
import { Button, HelperText, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FadeIn from "react-native-fade-in-image";
import { DarkContext } from "../utils/DarkContext";
import ThemeView from "../components/ThemeView";

const LoginScreen = () => {
  // -----CONTEXTS-----

  const { setUser } = useContext(UserContext);
  const { dark } = useContext(DarkContext);

  // -----STATES-----

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [emailOrPassError, setEmailOrPassError] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });

  // -----STACK NAVIGATOR-----

  const navigation = useNavigation();

  // -----FUNCTIONS-----

  const onLoginPressed = async () => {
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
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  // -----RENDER-----

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <ThemeView>
          <View style={styles.root}>
            <FadeIn
              placeholderStyle={{
                backgroundColor: dark ? "#312F2F" : "#f6f6f6",
              }}
            >
              <Image source={Logo} style={styles.logo} />
            </FadeIn>
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
              secureTextEntry={showPassword}
              right={
                <TextInput.Icon
                  name={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
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
