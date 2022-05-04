import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const HomepageScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <View style={style.body}>
      <Text style={style.headerText}>Welcome, {user.username} 😊!</Text>
      <View style={style.tapWrapper}>
        <Text style={style.tap}> Do something new</Text>
        <Text style={style.tap}> Meditate</Text>
        <Text style={style.tap}> Get active!</Text>
        <Text style={style.tap}> Settings</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  body: {
    backgroundColor: "pink",
    flex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 50,
    alignSelf: "center",
  },
  tapWrapper: {
    flex: 1,
    padding: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tap: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    margin: 2,
    color: "black",
    lineHeight: 25,
    textAlign: "center",
    fontSize: 15,
  },
});
export default HomepageScreen;
