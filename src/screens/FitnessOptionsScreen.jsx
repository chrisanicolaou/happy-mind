import { StyleSheet, View, SafeAreaView, Dimensions } from "react-native";
import {
  RadioButton,
  Avatar,
  Text,
  Headline,
  Title,
  Button,
  Subheading,
} from "react-native-paper";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { fetchExercises } from "../utils/api";
import { shuffleArray } from "../utils/utils";
import ThemeView from "../components/ThemeView";

const FitnessOptionsScreen = () => {
  const [workoutIntensity, setWorkoutIntensity] = useState("light");
  const [workoutType, setWorkoutType] = useState("cardio");
  const navigation = useNavigation();

  const onWorkoutButtonPress = async () => {
    try {
      const exercisesArray = await fetchExercises(
        workoutIntensity,
        workoutType
      );
      shuffleArray(exercisesArray);
      navigation.navigate("GetActive", { exercisesArray: exercisesArray });
    } catch (err) {
      console.log(err);
    }
  };

  const changeWorkoutIntensity = (intensity) => {
    setWorkoutIntensity(intensity);
  };

  const changeWorkoutType = (type) => {
    setWorkoutType(type);
  };

  return (
    <SafeAreaView>
      <ThemeView>
        <View style={styles.root}>
          <View style={styles.optionsContainer}>
            <Title>Workout Intensity</Title>
            <View style={styles.buttonsContainer}>
              <Button
                icon="emoticon-excited"
                mode={workoutIntensity === "light" ? "contained" : "outlined"}
                onPress={() => changeWorkoutIntensity("light")}
                style={styles.button}
              >
                Light
              </Button>
              <Button
                icon="emoticon-frown"
                mode={workoutIntensity === "average" ? "contained" : "outlined"}
                onPress={() => changeWorkoutIntensity("average")}
                style={styles.button}
              >
                Average
              </Button>
              <Button
                icon="emoticon-dead"
                mode={workoutIntensity === "intense" ? "contained" : "outlined"}
                onPress={() => changeWorkoutIntensity("intense")}
                style={styles.button}
              >
                Intense
              </Button>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <Title>Workout Type</Title>
            <View style={styles.buttonsContainer}>
              <Button
                icon="run-fast"
                mode={workoutType === "cardio" ? "contained" : "outlined"}
                onPress={() => changeWorkoutType("cardio")}
                style={styles.button}
              >
                Cardio
              </Button>
              <Button
                icon="arm-flex"
                mode={workoutType === "muscles" ? "contained" : "outlined"}
                onPress={() => changeWorkoutType("muscles")}
                style={styles.button}
              >
                Muscles
              </Button>
              <Button
                icon="karate"
                mode={workoutType === "flexibility" ? "contained" : "outlined"}
                onPress={() => changeWorkoutType("flexibility")}
                style={styles.button}
              >
                Flexible
              </Button>
            </View>
          </View>
          <Subheading style={{ marginBottom: 20 }}>
            Ready for your{" "}
            <Text style={{ fontWeight: "bold" }}>
              {workoutIntensity} {workoutType}
            </Text>{" "}
            workout?
          </Subheading>
          <Button mode="contained" onPress={onWorkoutButtonPress}>
            Let's go!
          </Button>
        </View>
      </ThemeView>
    </SafeAreaView>
  );
};

export default FitnessOptionsScreen;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  optionsContainer: {
    alignItems: "center",
    marginBottom: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    marginHorizontal: 5,
    width: 110,
  },
  radioButtonsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  radioButton: {
    paddingHorizontal: 20,
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
