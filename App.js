import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomepageScreen from "./src/screens/HomepageScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import PickInterestsScreen from "./src/screens/PickInterestsScreen";
import HobbySwipeScreen from "./src/screens/HobbySwipeScreen";
import GetActiveScreen from "./src/screens/GetActiveScreen";
import MeditateScreen from "./src/screens/MeditateScreen";
import { UserContext } from "./src/utils/UserContext";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import FitnessOptionsScreen from "./src/screens/FitnessOptionsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState("");
  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <PaperProvider theme={{ ...DefaultTheme }}>
          <SafeAreaView style={styles.root}>
            <Stack.Navigator
              initialRouteName="Meditate"
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
    backgroundColor: "#F9FBFC",
  },
});

export default App;
