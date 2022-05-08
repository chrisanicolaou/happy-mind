import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "./src/screens/LoginScreen";
// import HomepageScreen from "./src/screens/HomepageScreen";
// import SignUpScreen from "./src/screens/SignUpScreen";
// import PickInterestsScreen from "./src/screens/PickInterestsScreen";
// import HobbySwipeScreen from "./src/screens/HobbySwipeScreen";
// import GetActiveScreen from "./src/screens/GetActiveScreen";
// import MeditateScreen from "./src/screens/MeditateScreen";
import { UserContext } from "./src/utils/UserContext";
// import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
// import FitnessOptionsScreen from "./src/screens/FitnessOptionsScreen";
// import SettingsScreen from "./src/screens/SettingsScreen";
import {
  ForgotPasswordScreen,
  FitnessOptionsScreen,
  SettingsScreen,
  LoginScreen,
  HomepageScreen,
  SignUpScreen,
  PickInterestsScreen,
  HobbySwipeScreen,
  GetActiveScreen,
  MeditateScreen,
} from "./src/screens/index";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState("");
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
    },
    animation: {
      scale: 1.0,
    },
  };

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={styles.root}>
            <Stack.Navigator
              initialRouteName="Settings"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
              />
              <Stack.Screen name="Homepage" component={HomepageScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen
                name="PickInterests"
                component={PickInterestsScreen}
              />
              <Stack.Screen name="HobbySwipe" component={HobbySwipeScreen} />
              <Stack.Screen name="GetActive" component={GetActiveScreen} />
              <Stack.Screen name="Meditate" component={MeditateScreen} />
              <Stack.Screen
                name="FitnessOptions"
                component={FitnessOptionsScreen}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
          </SafeAreaView>
        </PaperProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(rgba(100, 20, 200, 0.4))",
  },
});

export default App;
