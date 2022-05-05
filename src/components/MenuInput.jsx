import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const MenuItem = ({ itemImage, text }) => {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.heading}>{text}</Text>
      <Image source={itemImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    width: "200%",
    height: "50%",
    padding: 0,
    backgroundColor: "rgba(255,255,255, .01)",
  },
  image: {
    padding: 40,
    paddingLeft: 70,
    width: 70,
    height: 70,
    opacity: 0.8,
    borderRadius: 100,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
  },
});

export default MenuItem;
