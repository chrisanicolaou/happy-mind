import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useContext } from "react";
import {
  Button,
  DefaultTheme,
  HelperText,
  TextInput,
} from "react-native-paper";
import { setDisplayName } from "../utils/api";
import { UserContext } from "../utils/UserContext";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();
  const [newDisplayName, setNewDisplayName] = useState("");
  const [displayNameStatus, setDisplayNameStatus] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });
  const [email, setNewEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState({
    type: "error" || "info",
    visible: false,
    message: "",
  });

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
  const onUpdatePasswordPress = () => {
    if (!newPassword) {
      setPasswordStatus({
        type: "error",
        visible: true,
        message: "Password cannot be less than 6 characters!",
      });
      return;
    }
  };
  const onUpdateEmailPress = () => {
    console.warn("Change email name");
  };
  const onLogoutPress = () => {
    console.warn("logut");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            label="Display Name"
            value={newDisplayName}
            onChangeText={(text) => setNewDisplayName(text)}
            style={styles.textInput}
          />
          <HelperText
            type={displayNameStatus.type}
            visible={displayNameStatus.visible}
          >
            {displayNameStatus.message}
          </HelperText>
          <Button
            mode="contained"
            style={styles.button}
            onPress={onChangeDisplayNamePress}
          >
            Change Display Name
          </Button>
        </View>
        <View style={styles.input}>
          <TextInput
            label="Old Password"
            value={newDisplayName}
            onChangeText={(text) => setNewDisplayName(text)}
            style={styles.textInput}
          />
          <TextInput
            label="New Password"
            value={newDisplayName}
            onChangeText={(text) => setNewDisplayName(text)}
            style={styles.textInput}
          />
          <HelperText
            type={passwordStatus.type}
            visible={passwordStatus.visible}
          >
            {passwordStatus.message}
          </HelperText>
          <Button
            mode="contained"
            style={styles.button}
            onPress={onUpdatePasswordPress}
          >
            Update Password
          </Button>
        </View>
        <KeyboardAvoidingView
          style={{ ...styles.input, marginBottom: "5%" }}
          behavior={"height"}
        >
          <TextInput
            label="Email"
            value={newDisplayName}
            onChangeText={(text) => setNewDisplayName(text)}
            style={styles.textInput}
          />
          <HelperText type={emailStatus.type} visible={emailStatus.visible}>
            {emailStatus.message}
          </HelperText>
          <Button
            mode="contained"
            style={styles.button}
            onPress={onUpdateEmailPress}
          >
            Update Email
          </Button>
        </KeyboardAvoidingView>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            mode="contained"
            color="red"
            style={styles.logoutButton}
            onPress={onLogoutPress}
          >
            Logout
          </Button>
          <Button
            mode="contained"
            style={styles.logoutButton}
            onPress={() => navigation.navigate("Homepage")}
          >
            Back
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "5%",
    paddingTop: "5%",
  },
  input: {
    paddingHorizontal: "10%",
    marginVertical: "5%",
  },
  textInput: {
    marginBottom: 10,
  },
  button: {
    width: "75%",
    alignSelf: "center",
    marginTop: "2%",
  },
  logoutButton: {
    width: "40%",
    marginHorizontal: "10%",
  },
});
