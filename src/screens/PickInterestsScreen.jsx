import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { fetchHobbiesByInterest } from "../utils/api";
import MenuItem from "../components/MenuItem";
import { shuffleArray } from "../utils/utils";

const PickInterestsScreen = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const onInterestPress = async (interest) => {
    //Refactored - see api.js for details
    try {
      const hobbiesArr = await fetchHobbiesByInterest(interest);
      shuffleArray(hobbiesArr);
      navigation.navigate("HobbySwipe", { hobbiesArr: hobbiesArr });
    } catch (err) {
      console.log(err);
    }

    //----------OLD CODE BELOW----------
    // const querySnap = await getDocs(collection(db, interest));
    // querySnap.forEach((doc) => {
    //   setHobbiesArray((currentHobbies) => {
    //     currentHobbies.push(doc.data());
    //     return currentHobbies;
    //   });
    // });
    // navigation.navigate("HobbySwipe", { hobbiesArray });
  };

  //Needs styling! Feel free to change "Touchable Opacity" to CustomButtons. As long as onPress={() =>  onInterestsPress(interestName)} is kept, it will work fine.
  //Available for a Zoom if any q's

  return (
    <ImageBackground
      source={require("../..//images/Interests.jpeg")}
      style={styles.container}
    >
      <View style={styles.top}>
        <Text style={styles.header}>
          Hello, {user.username ? user.username : null}!
        </Text>
        <Text style={styles.header}>Pick your Interests!</Text>
      </View>

      <View style={styles.menuContainer}>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "130%",
  },
  top: {
    height: "20%",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 23,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255,255,255, .1)",
  },
  menuContainer: {
    height: "70%",
    width: "50%",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "5%",
    paddingLeft: "10%",
    paddingBottom: "2%",
    justifyContent: "space-between",
  },
  buttonItem: {
    marginRight: "70%",
    marginBottom: "22%",
    padding: 0,
    width: 100,
    height: 100,
  },
});

export default PickInterestsScreen;
