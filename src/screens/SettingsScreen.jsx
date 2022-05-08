import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  DefaultTheme,
  HelperText,
  TextInput,
} from "react-native-paper";

const SettingsScreen = () => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setNewEmail] = useState("");

  const onChangeDisplayNamePress = () => {
    console.warn("Change display name");
  };
  const onUpdatePasswordPress = () => {
    console.warn("Change password name");
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
          <HelperText type="error" visible={true}>
            lorem ipsum other words fjkdshjkfdsfsd
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
          <HelperText type="error" visible={true}>
            lorem ipsum other words fjkdshjkfdsfsd
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
          <HelperText type="error" visible={true}>
            Sample
          </HelperText>
          <Button
            mode="contained"
            style={styles.button}
            onPress={onUpdateEmailPress}
          >
            Update Email
          </Button>
        </KeyboardAvoidingView>
        <View style={styles.input}>
          <Button
            mode="contained"
            color="red"
            style={styles.logoutButton}
            onPress={onLogoutPress}
          >
            Logout
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
  },
  logoutButton: {
    width: "50%",
    alignSelf: "center",
  },
});
