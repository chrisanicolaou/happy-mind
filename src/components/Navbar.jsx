import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import {
  FitnessOptionsScreen,
  PickInterestsScreen,
  MeditateScreen,
  SettingsScreen,
} from "../screens/index";
import FitnessStackNavigator from "./FitnessStackNavigator";
import InterestsStackNavigator from "./InterestsStackNavigator";

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "hobbies", title: "Hobbies", icon: "" },
    { key: "fitness", title: "Fitness", icon: "" },
    { key: "meditate", title: "Meditate", icon: "" },
    { key: "settings", title: "Settings", icon: "" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    hobbies: InterestsStackNavigator,
    fitness: FitnessStackNavigator,
    meditate: MeditateScreen,
    settings: SettingsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
    />
  );
};

export default Navbar;

const styles = StyleSheet.create({});
