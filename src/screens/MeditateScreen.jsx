import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

const MeditateScreen = () => {
  return (
    <View style={style.body}>
      <Text style={style.headerText}>Meditation</Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=919&q=80",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <View style={style.CustomButton}>
        <CustomButton text="session 1"> </CustomButton>
      </View>
      <View>
        <CustomButton text="session 2"> </CustomButton>
      </View>
      <View>
        <CustomButton text="session 3"> </CustomButton>
      </View>
      <View>
        <CustomButton text="session 4"> </CustomButton>
      </View>
      <View>
        <CustomButton text="session 5"> </CustomButton>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  body: {
    backgroundColor: "beige",
    flex: 1,
    borderColor: "black",
  },
  headerText: {
    color: "black",
    fontSize: 45,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: "lightslategrey",
    borderRadius: 50 / 2,
    backgroundColor: "lightslategrey",
  },
  CustomButton: {},
});

export default MeditateScreen;
