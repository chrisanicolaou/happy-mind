import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigation } from "@react-navigation/native";

const HomepageScreen = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View style={style.body}>
      <Text style={style.headerText}>Welcome, {user.username} 😊!</Text>
      <View style={style.tapWrapper}>
        <Text
          onPress={() => {
            navigation.navigate("PickInterests");
          }}
          style={style.tap}
        >
          Do something new
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("Meditate");
          }}
          style={style.tap}
        >
          Meditate
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("GetActive");
          }}
          style={style.tap}
        >
          Get active!
        </Text>
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
