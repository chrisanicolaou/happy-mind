import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FitnessOptionsScreen, GetActiveScreen } from "../screens/index";

const FitnessStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FitnessOptions"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="FitnessOptions" component={FitnessOptionsScreen} />
        <Stack.Screen name="GetActive" component={GetActiveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FitnessStackNavigator;

const styles = StyleSheet.create({});
