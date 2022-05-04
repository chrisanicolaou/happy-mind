import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const PickInterestsScreen = () => {
  const { user } = useContext(UserContext);
  const [hobbiesArray, setHobbiesArray] = useState([]);
  const navigation = useNavigation();

  const onInterestPress = async (interest) => {
    console.log(interest, " < interest");
    const querySnap = await getDocs(collection(db, interest));
    querySnap.forEach((doc) => {
      setHobbiesArray((currentHobbies) => {
        currentHobbies.push(doc.data());
        return currentHobbies;
      });
    });
    navigation.navigate("HobbySwipe", { hobbiesArray });
  };

  //Needs styling! Feel free to change "Touchable Opacity" to CustomButtons. As long as onPress={() =>  onInterestsPress(interestName)} is kept, it will work fine.
  //Available for a Zoom if any q's

  return (
    <View style={styles.container}>
      <Text>Hello, {user.username}!</Text>
      <Text>PickInterestsScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onInterestPress("languages")}
      >
        <Text> Languages </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onInterestPress("art")}
      >
        <Text> Art </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onInterestPress("gaming")}
      >
        <Text> Gaming </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onInterestPress("sports")}
      >
        <Text> Sports </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
});

export default PickInterestsScreen;
