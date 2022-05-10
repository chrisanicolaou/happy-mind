import { StyleSheet, Text, View } from "react-native";
import { RadioButton, Avatar } from "react-native-paper";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { fetchExercises } from "../utils/api";
import { shuffleArray } from "../utils/utils";

const FitnessOptionsScreen = () => {
  const [workoutDifficulty, setWorkoutDifficulty] = useState("light");
  const [workoutType, setWorkoutType] = useState("cardio");
  const navigation = useNavigation();

  const onWorkoutButtonPress = async () => {
    try {
      const exercisesArray = await fetchExercises(
        workoutDifficulty,
        workoutType
      );
      shuffleArray(exercisesArray);
      navigation.navigate("GetActive", { exercisesArray: exercisesArray });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={[styles.big, styles.greenUnderline, styles.margin]}>
        Workout Intensity
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setWorkoutDifficulty(newValue)}
        value={workoutDifficulty}
      >
        <View style={styles.radioButtonsContainer}>
          <View style={styles.radioButton}>
            <RadioButton value="light" />
            <Text>{"\n"}Light</Text>
            <Avatar.Image
              size={80}
              source={require("../../images/light.png")}
            />
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="average" />
            <Text>{"\n"}Average</Text>
            <Avatar.Image
              size={80}
              source={require("../../images/average.png")}
            />
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="intense" />
            <Text>{"\n"}Intense</Text>
            <Avatar.Image
              size={80}
              source={require("../../images/intense.png")}
            />
          </View>
        </View>
      </RadioButton.Group>
      <Text style={[styles.big, styles.greenUnderline]}>
        What would you like to workout?
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setWorkoutType(newValue)}
        value={workoutType}
      >
        <View style={styles.radioButtonsContainer}>
          <View style={styles.radioButton}>
            <RadioButton value="cardio" />
            <Text>{"\n"}Cardio</Text>
            <Avatar.Image
              size={80}
              source={require("../../images/cardio.png")}
            />
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="muscles" />
            <Text>{"\n"}Muscles</Text>
            <Avatar.Image
              size={80}
              source={require("../../images/muscle.png")}
            />
            <Text>{"\n"}</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="flexibility" />
            <Text>
              {"\n"}Flexibility{"\n"}
            </Text>
            <Avatar.Image
              size={80}
              source={require("../../images/flexiblity.png")}
            />
          </View>
        </View>
      </RadioButton.Group>

      <Text>
        {"\n"}My intensity level: {workoutDifficulty}
        {"\n"}
      </Text>
      <Text style={styles.textSpace}>
        My workout type: {workoutType}
        {"\n"}
        {"\n"}
      </Text>
      <CustomButton
        text="Get Active!"
        onPress={onWorkoutButtonPress}
      ></CustomButton>
    </View>
  );
};

export default FitnessOptionsScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 60,
    backgroundColor: "orange",
    flex: 1,
  },
  radioButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 0.25,
  },
  radioButton: {
    paddingHorizontal: 20,
    backgroundColor: "purple",
    marginBottom: 0.4,
  },
  big: {
    fontSize: 15,
    flex: 0.15,
    paddingTop: 0.5,
    marginBottom: 11,
  },
  greenUnderline: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  text: {
    paddingBottom: 10,
  },
});
