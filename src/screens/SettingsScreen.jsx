import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, DefaultTheme, TextInput } from "react-native-paper";

const SettingsScreen = () => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setNewEmail] = useState("");

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
          <Button mode="contained">Change Display Name</Button>
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
          <Button mode="contained">Change Display Name</Button>
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
          <Button mode="contained">Change Display Name</Button>
        </KeyboardAvoidingView>
        <View style={styles.input}>
          <Button mode="contained" color="red">
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
});
