import { View, Text } from "react-native";
import React, { useState } from "react";

const GetActiveScreen = ({ route }) => {
  const { exercisesArray } = route.params;
  const [exercises, setExercises] = useState(exercisesArray);
  console.log(exercises);
  return (
    <View>
      <Text>GetActiveScreen</Text>
    </View>
  );
};

export default GetActiveScreen;
