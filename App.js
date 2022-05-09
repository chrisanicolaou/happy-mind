import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "./src/utils/UserContext";
import Navbar from "./src/components/Navbar";
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
import { DarkContext } from "./src/utils/DarkContext";

const Stack = createNativeStackNavigator();

console.log(DefaultTheme);

const App = () => {
  const [user, setUser] = useState("");
  const [dark, setDark] = useState(false);
  const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: "#96c5e0",
      accent: "#C8A7AE",
      background: "#f6f6f6",
      text: "black",
    },
    animation: {
      scale: 1.0,
    },
  };
  const darkTheme = {
    ...DefaultTheme,
    roundness: 10,
    dark: true,
    mode: "exact",
    colors: {
      background: "#312F2F",
      primary: "#8FAACC",
      placeholder: "white",
      text: "white",
    },
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <DarkContext.Provider value={{ dark, setDark }}>
        <PaperProvider theme={dark ? darkTheme : theme}>
          <SafeAreaView style={styles.root}>
            {!user ? (
              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName="Login"
                  screenOptions={{ headerShown: false }}
                >
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                  />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            ) : null}
            {user ? <Navbar /> : null}
          </SafeAreaView>
        </PaperProvider>
      </DarkContext.Provider>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(rgba(100, 20, 200, 0.4))",
  },
});

export default App;
