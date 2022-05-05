import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const GetActiveScreen = ({ route }) => {
  const { exercisesArray } = route.params;
  const [exercises, setExercises] = useState(exercisesArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const onFinishExercisePress = () => {
    navigation.navigate("Homepage");
  };

  const changeIndex = (num) => {
    setCurrentIndex((currIndex) => currIndex + num);
  };

  return (
    <View style={styles.root}>
      <Text>{exercises[currentIndex].name}</Text>
      <View style={styles.flexWrap}>
        {currentIndex !== 0 ? (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "#FF0000",
              ...styles.flexItems,
            }}
            onPress={() => changeIndex(-1)}
          ></TouchableOpacity>
        ) : null}
        <Image
          style={{ ...styles.flexItems, width: 250, height: 250 }}
          source={{ uri: exercises[currentIndex].picture }}
        ></Image>
        {currentIndex !== exercises.length - 1 ? (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "green",
              ...styles.flexItems,
            }}
            onPress={() => changeIndex(1)}
          ></TouchableOpacity>
        ) : null}
      </View>
      <Text>{exercises[currentIndex].description}</Text>
      <Text>-----------------------</Text>
      <Text>Step One: {exercises[currentIndex].stepOne}</Text>
      <Text>Step Two: {exercises[currentIndex].stepTwo}</Text>
      <Text>Step Three: {exercises[currentIndex].stepThree}</Text>
      <CustomButton
        text="Watch Exercise Video"
        onPress={() => Linking.openURL(exercises[currentIndex].howToLink)}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      ></CustomButton>
      <CustomButton
        text="Finish Exercising"
        onPress={onFinishExercisePress}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      ></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 70,
    borderRadius: 50,
  },
  flexWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flexItems: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});

export default GetActiveScreen;
