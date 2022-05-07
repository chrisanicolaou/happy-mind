import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigation } from "@react-navigation/native";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo-app-loading";

const HomepageScreen = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  //custom fonts
  let [fontsLoaded] = useFonts({
    "OleoScript-Regular": require("../../assets/fonts/OleoScript-Regular.ttf"),
    "TitanOne-Regualar": require("../../assets/fonts/TitanOne-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  }

  const Header = () => {
    return (
      <View style={styles.header}>
        {/* <Text style={styles.name}>{user.username} </Text> */}
        {/* <LoadFonts/> */}
        <Text style={styles.title}> Welcome {user.username} </Text>
      </View>
    );
  };

  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("PickInterests")}
        >
          <Text style={styles.boxheader}> INTERESTS </Text>
          <View style={styles.inner}>
            <Image
              style={styles.imageSetting}
              source={require("../../assets/home-screen-images/Discover.jpg")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("Meditate")}
        >
          <Text style={styles.boxheader}> MEDITATION </Text>
          <View elevation={5} style={styles.inner}>
            <Image
              style={styles.imageSetting}
              source={require("../../assets/home-screen-images/Meditation.jpg")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("FitnessOptions")}
        >
          <Text style={styles.boxheader}> ACTIVITY </Text>

          <View style={styles.inner}>
            <Image
              style={styles.imageSetting}
              source={require("../../assets/home-screen-images/Activity.jpg")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxheader}> SETTINGS </Text>
          <View style={styles.inner}>
            <Image
              style={styles.imageSetting}
              source={require("../../assets/home-screen-images/Settings.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Boxes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7bdff2",
  },
  title: {
    fontSize: 30,
    fontFamily: "OleoScript-Regular",
    color: "#fdfdff",
    textAlign: "center",
    textShadowColor: "#012a4a",
    textShadowOffset: { width: 1, height: -2 },
    textShadowRadius: 20,
  },
  header: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1982c4",
  },
  name: {
    fontSize: 25,
    fontFamily: "OleoScript-Regular",
    color: "#fdfdff",
    textAlign: "center",
    textShadowColor: "#edede9",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 20,
  },
  boxContainer: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  imageSetting: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    borderWidth: 4,
  },
  boxheader: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "TitanOne-Regualar",
    color: "#fdfdff",
    textShadowColor: "#012a4a",
    textShadowOffset: { width: 1, height: -2 },
    textShadowRadius: 20,
  },
  inner: {
    flex: 1,
    alignItems: "center",
  },
});
export default HomepageScreen;
