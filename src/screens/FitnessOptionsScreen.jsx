import { StyleSheet, Text, View } from "react-native";
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
      <Text style={[styles.big, styles.greenUnderline]}>Workout Intensity</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setWorkoutDifficulty(newValue)}
        value={workoutDifficulty}
      >
        <View style={styles.radioButtonsContainer}>
          <View style={styles.radioButton}>
            <RadioButton value="light" />
            <Text>{"\n"}Light</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="average" />
            <Text>{"\n"}Average</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="intense" />
            <Text>{"\n"}Intense</Text>
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
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="muscles" />
            <Text>{"\n"}Muscles</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="flexibility" />
            <Text>{"\n"}Flexibility</Text>
          </View>
        </View>
      </RadioButton.Group>
      <Text>
        My intensity level: {workoutDifficulty}
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
  },
  big: {
    fontSize: 15,
    flex: 0.15,
  },
  greenUnderline: {
    color: "green",
    textDecorationLine: "underline",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  textSpacee: {
    lineHeight: 30,
  },
});
