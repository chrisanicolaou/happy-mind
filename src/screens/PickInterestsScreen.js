import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";

const PickInterestsScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const [hobbiesArray, setHobbiesArray] = useState([]);
 
  const onInterestPress = (interest) => {
    console.log(interest, ' < interest');
  
  
  }
  
  return (
    <View style={styles.container}>
      <Text >PickInterestsScreen</Text>
      <TouchableOpacity style={styles.button} onPress={onInterestPress('languages')}>
      <Text> Languages </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onInterestPress('art')}>
      <Text> Art </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onInterestPress('gaming')}>
      <Text> Gaming </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onInterestPress('sports')}>
      <Text> Sports </Text>
      </TouchableOpacity>
      <Text>Hello, {user.username}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10

  },
});

export default PickInterestsScreen;
