import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState, useContext } from "react";
import {
  Button,
  HelperText,
  Switch,
  TextInput,
  Text,
} from "react-native-paper";
import {
  logUserOut,
  setDisplayName,
  setEmail,
  setPassword,
} from "../utils/api";
import { UserContext } from "../utils/UserContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DarkContext } from "../utils/DarkContext";

const SettingsScreen = () => {
  // -----CONTEXTS-----
  const { user, setUser } = useContext(UserContext);
  const { dark, setDark } = useContext(DarkContext);

  // -----STATES-----

  const [newDisplayName, setNewDisplayName] = useState("");
  const [displayNameStatus, setDisplayNameStatus] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });
  const [newEmail, setNewEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });

  // -----FUNCTIONS-----

  const onChangeDisplayNamePress = async () => {
    try {
      if (!newDisplayName) {
        setDisplayNameStatus({
          type: "error",
          visible: true,
          message: "Display name cannot be empty!",
        });
        return;
      }
      await setDisplayName(user, newDisplayName);
      setUser((userDetails) => {
        return { ...userDetails, displayName: newDisplayName };
      });
      setDisplayNameStatus({
        type: "info",
        visible: true,
        message: "Success!",
      });
      setNewDisplayName("");
    } catch (err) {
      setDisplayNameStatus({
        type: "error",
        visible: true,
        message: err.message,
      });
    }
  };
  const onUpdatePasswordPress = async () => {
    try {
      if (!confirmNewPassword) {
        setPasswordStatus({
          type: "error",
          visible: true,
          message: "Password cannot be less than 6 characters!",
        });
        return;
      }
      if (newPassword !== confirmNewPassword) {
        setPasswordStatus({
          type: "error",
          visible: true,
          message: "Passwords do not match!",
        });
        return;
      }
      await setPassword(user, confirmNewPassword);
      setPasswordStatus({
        type: "info",
        visible: true,
        message: "Success!",
      });
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err) {
      setPasswordStatus({
        type: "error",
        visible: true,
        message: err.message,
      });
    }
  };
  const onUpdateEmailPress = async () => {
    try {
      if (!newEmail) {
        setEmailStatus({
          type: "error",
          visible: true,
          message: "Email cannot be empty!",
        });
        return;
      }
      await setEmail(user, newEmail);
      setEmailStatus({
        type: "info",
        visible: true,
        message: "Success!",
      });
      setNewEmail("");
    } catch (err) {
      setEmailStatus({
        type: "error",
        visible: true,
        message: err.message,
      });
    }
  };
  const onLogoutPress = async () => {
    await logUserOut();
    setUser("");
  };

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  // -----RENDER-----

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.displayInput}>
              <HelperText
                type={displayNameStatus.type}
                visible={displayNameStatus.visible}
              >
                {displayNameStatus.message}
              </HelperText>
              <TextInput
                label="Display Name"
                value={newDisplayName}
                onChangeText={(text) => setNewDisplayName(text)}
                style={styles.textInput}
              />
              <Button
                mode="contained"
                style={styles.button}
                onPress={onChangeDisplayNamePress}
              >
                Change
              </Button>
            </View>
            <View
              style={{
                alignSelf: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text style={{ paddingBottom: 10 }}>Dark Mode</Text>
              <Switch value={dark} onValueChange={toggleDarkMode} />
            </View>
          </View>
          <View style={styles.input}>
            <HelperText
              type={passwordStatus.type}
              visible={passwordStatus.visible}
            >
              {passwordStatus.message}
            </HelperText>
            <TextInput
              label="New Password"
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
              style={styles.textInput}
              secureTextEntry={showNewPassword}
              right={
                <TextInput.Icon
                  name={showNewPassword ? "eye" : "eye-off"}
                  onPress={() => setShowNewPassword(!showNewPassword)}
                />
              }
            />
            <TextInput
              label="Confirm New Password"
              value={confirmNewPassword}
              onChangeText={(text) => setConfirmNewPassword(text)}
              style={styles.textInput}
              secureTextEntry={showConfirmNewPassword}
              right={
                <TextInput.Icon
                  name={showConfirmNewPassword ? "eye" : "eye-off"}
                  onPress={() =>
                    setShowConfirmNewPassword(!showConfirmNewPassword)
                  }
                />
              }
            />
            <Button
              mode="contained"
              style={styles.button}
              onPress={onUpdatePasswordPress}
            >
              Update Password
            </Button>
          </View>
          <View
            style={{ ...styles.input, marginBottom: "5%" }}
            behavior={"height"}
          >
            <HelperText type={emailStatus.type} visible={emailStatus.visible}>
              {emailStatus.message}
            </HelperText>
            <TextInput
              label="Email"
              value={newEmail}
              onChangeText={(text) => setNewEmail(text)}
              style={styles.textInput}
            />
            <Button
              mode="contained"
              style={styles.button}
              onPress={onUpdateEmailPress}
            >
              Update Email
            </Button>
          </View>
          <Button
            mode="contained"
            color="#de0000"
            style={styles.logoutButton}
            onPress={onLogoutPress}
          >
            Logout
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

// -----STYLES-----

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingTop: 0,
  },
  input: {
    paddingHorizontal: "10%",
    marginTop: "5%",
  },
  displayInput: {
    paddingLeft: "10%",
    marginTop: "5%",
    width: "65%",
  },
  textInput: {
    marginBottom: 10,
    height: 55,
  },
  button: {
    width: "75%",
    alignSelf: "center",
    marginTop: "2%",
  },
  logoutButton: {
    width: "40%",
    marginHorizontal: "10%",
    alignSelf: "center",
  },
});

export default SettingsScreen;
