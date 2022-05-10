import React, { useState, useContext } from "react";
import { View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { UserContext } from "../utils/UserContext";
import { useNavigation } from "@react-navigation/native";
import { signUpUser } from "../utils/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, HelperText, TextInput } from "react-native-paper";
import ThemeView from "../components/ThemeView";

const SignUpScreen = () => {
  // -----CONTEXTS-----

  const { setUser } = useContext(UserContext);

  // -----STATES-----

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

  // -----STACK NAVIGATOR-----

  const navigation = useNavigation();

  // -----FUNCTIONS-----

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
      const user = await signUpUser(username, email, password);
      setUser(user);
    } catch (err) {
      setEmailError({
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

export default SignUpScreen;
