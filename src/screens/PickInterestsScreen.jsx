import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { fetchHobbiesByInterest } from "../utils/api";
import MenuItem from "../components/MenuItem";
import { shuffleArray } from "../utils/utils";
import { Button, Card, Headline, Title } from "react-native-paper";
import ThemeView from "../components/ThemeView";

const PickInterestsScreen = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const onInterestPress = async (interest) => {
    try {
      const hobbiesArr = await fetchHobbiesByInterest(interest);
      shuffleArray(hobbiesArr);
      navigation.navigate("HobbySwipe", { hobbiesArr: hobbiesArr });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ThemeView>
        <View style={styles.root}>
          <Headline>Find a new Hobby!</Headline>
          <View style={styles.interestsContainer}>
            <TouchableOpacity
              onPress={() => onInterestPress("languages")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Languages"}
                itemImage={require("../../assets/hobbiesPictures/Languages-modified.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onInterestPress("art")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Art"}
                itemImage={require("../../assets/hobbiesPictures/Art-modified.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onInterestPress("gaming")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Gaming"}
                itemImage={require("../../assets/hobbiesPictures/Gaming-modified.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onInterestPress("sports")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Sports"}
                itemImage={require("../../assets/hobbiesPictures/Football-modified.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onInterestPress("music")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Music"}
                itemImage={require("../../assets/hobbiesPictures/Music-modified.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onInterestPress("coding")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Coding"}
                itemImage={require("../../assets/hobbiesPictures/Coding-modified.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onInterestPress("science")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"Science"}
                itemImage={require("../../assets/hobbiesPictures/Science-modified.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onInterestPress("diy")}
              style={styles.buttonItem}
            >
              <MenuItem
                text={"DIY"}
                itemImage={require("../../assets/hobbiesPictures/DIY-modified.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ThemeView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 20,
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  interestsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: "60%",
    width: "80%",
    marginTop: "2%",
    marginBottom: "5%",
    backgroundColor: "rgba(100, 20, 200, 0)",
  },
  cardContainer: {
    height: "20%",
    width: "40%",
    margin: "5%",
  },
  buttonItem: {
    padding: "3.5%",
    // backgroundColor: "#9370db",
  },
  header: {
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "Bodoni 72",
    textDecorationLine: "underline",
  },
});

export default PickInterestsScreen;
