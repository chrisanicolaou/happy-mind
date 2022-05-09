import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { PickInterestsScreen, HobbySwipeScreen } from "../screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const InterestsStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PickInterests"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="PickInterests" component={PickInterestsScreen} />
        <Stack.Screen name="HobbySwipe" component={HobbySwipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InterestsStackNavigator;

const styles = StyleSheet.create({});
