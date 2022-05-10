import React, { useContext } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { DarkContext } from "../utils/DarkContext";
import { theme, darkTheme } from "../utils/themes";

const MenuItem = ({ itemImage, text }) => {
  const { dark } = useContext(DarkContext);
  return (
    <View
      style={
        dark
          ? {
              borderRadius: 10,
              backgroundColor: "rgba(255,255,255, 0.7)",
            }
          : { backgroundColor: "rgba(255,255,255, .01)" }
      }
    >
      <Text style={styles.heading}>{text}</Text>
      <Image source={itemImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    padding: 40,
    paddingLeft: 70,
    width: 70,
    height: 70,
    opacity: 0.8,
    borderRadius: 100,
  },
  heading: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default MenuItem;
