import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
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
        paddingTop: "15%",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "10%",
      }}
    >
      <Headline>Find a new hobby!</Headline>
      <View style={styles.interestsContainer}>
        <TouchableOpacity
          onPress={() => onInterestPress("languages")}
          style={styles.buttonItem}
        >
          <MenuItem
            text={"Languages"}
            itemImage={require("../../images/Languages.jpeg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onInterestPress("art")}
          style={styles.buttonItem}
        >
          <MenuItem text={"Art"} itemImage={require("../../images/Art.jpeg")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onInterestPress("gaming")}
          style={styles.buttonItem}
        >
          <MenuItem
            text={"Gaming"}
            itemImage={require("../../images/Gaming.jpeg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onInterestPress("sports")}
          style={styles.buttonItem}
        >
          <MenuItem
            text={"Sports"}
            itemImage={require("../../images/Football.jpeg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onInterestPress("sports")}
          style={styles.buttonItem}
        >
          <MenuItem
            text={"Music"}
            itemImage={require("../../images/Music.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onInterestPress("sports")}
          style={styles.buttonItem}
        >
          <MenuItem
            text={"Coding"}
            itemImage={require("../../images/Coding.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onInterestPress("sports")}
          style={styles.buttonItem}
        >
          <MenuItem
            text={"Science"}
            itemImage={require("../../images/Science.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onInterestPress("sports")}
          style={styles.buttonItem}
        >
          <MenuItem text={"DIY"} itemImage={require("../../images/DIY.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  interestsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: "90%",
    width: "80%",
    marginTop: "5%",
  },
  cardContainer: {
    height: "20%",
    width: "40%",
    margin: "5%",
  },
  buttonItem: {
    padding: "5%",
  },
});

export default PickInterestsScreen;
