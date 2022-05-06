import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useRef } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import Carousel from "react-native-snap-carousel";

const GetActiveScreen = ({ route }) => {
  const { exercisesArray } = route.params;
  const [exercises, setExercises] = useState(exercisesArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const carousel = useRef(null);

  const onFinishExercisePress = () => {
    navigation.navigate("Homepage");
  };

  const changeIndex = (num) => {
    setCurrentIndex((currIndex) => currIndex + num);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <View style={styles.flexWrap}>
          <Image
            style={{ ...styles.flexItems, width: 250, height: 250 }}
            source={{ uri: item.picture }}
          ></Image>
        </View>
        <Text>{item.description}</Text>
        <Text>-----------------------</Text>
        <Text>Step One: {item.stepOne}</Text>
        <Text>Step Two: {item.stepTwo}</Text>
        <Text>Step Three: {item.stepThree}</Text>
        <CustomButton
          text="Watch Exercise Video"
          onPress={() => Linking.openURL(item.howToLink)}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        ></CustomButton>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: "30%" }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          lockScrollWhileSnapping={true}
          swipeThreshold={10}
          layout={"default"}
          ref={carousel}
          data={exercises}
          sliderWidth={380}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setCurrentIndex(index)}
        />
      </View>
      <CustomButton
        text="Finish Exercising"
        onPress={onFinishExercisePress}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      ></CustomButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 70,
    borderRadius: 50,
  },
  flexWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flexItems: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});

export default GetActiveScreen;
