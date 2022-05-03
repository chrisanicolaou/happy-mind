import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomepageScreen from "./src/screens/HomepageScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import PickInterestsScreen from "./src/screens/PickInterestsScreen";
import HobbySwipeScreen from "./src/screens/HobbySwipeScreen";
import GetActiveScreen from "./src/screens/GetActiveScreen";
import MeditateScreen from "./src/screens/MeditateScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Homepage" component={HomepageScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="PickInterests" component={PickInterestsScreen} />
          <Stack.Screen name="HobbySwipe" component={HobbySwipeScreen} />
          <Stack.Screen name="GetActive" component={GetActiveScreen} />
          <Stack.Screen name="Meditate" component={MeditateScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
