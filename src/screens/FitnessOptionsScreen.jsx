import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
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

  const onBackButtonPress = () => {
    navigation.navigate("Homepage");
  };
  return (
    <View style={styles.root}>
      <Text>Workout Intensity</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setWorkoutDifficulty(newValue)}
        value={workoutDifficulty}
      >
        <View style={styles.radioButtonsContainer}>
          <View style={styles.radioButton}>
            <RadioButton value="light" />
            <Text>Light</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="average" />
            <Text>Average</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="intense" />
            <Text>Intense</Text>
          </View>
        </View>
      </RadioButton.Group>
      <Text>What would you like to workout?</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setWorkoutType(newValue)}
        value={workoutType}
      >
        <View style={styles.radioButtonsContainer}>
          <View style={styles.radioButton}>
            <RadioButton value="cardio" />
            <Text>Cardio</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="muscles" />
            <Text>Muscles</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="flexibility" />
            <Text>Flexibility</Text>
          </View>
        </View>
      </RadioButton.Group>
      <CustomButton
        text="Get Active!"
        onPress={onWorkoutButtonPress}
      ></CustomButton>
      <TouchableOpacity onPress={onBackButtonPress}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FitnessOptionsScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 60,
  },
  radioButtonsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  radioButton: {
    paddingHorizontal: 20,
  },
});
