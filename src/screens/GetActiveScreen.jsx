import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import Carousel from "react-native-snap-carousel";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { WebView } from "react-native-webview";
import { isValidTimestamp } from "@firebase/util";
import ThemeView from "../components/ThemeView";

const GetActiveScreen = ({ route }) => {
  const { exercisesArray } = route.params;
  const [exercises, setExercises] = useState(exercisesArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const carousel = useRef(null);

  const onFinishExercisePress = () => {
    navigation.navigate("FitnessOptions");
  };

  const onVideoReady = (e) => e.target.pauseVideo();

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ height: 500 }}>
        <Card style={{ flex: 1, flexDirection: "column" }} elevation={5}>
          <Card.Content>
            <Title style={{ textAlign: "center" }}>{item.name}</Title>
          </Card.Content>
          <View
            style={{
              height: 300,
              margin: 10,
              borderColor: "black",
            }}
          >
            <WebView
              source={{ uri: item.howToLink }}
              style={styles.video}
              scalesPageToFit={true}
            />
          </View>
          <Card.Content>
            <Paragraph style={{ textAlign: "center", paddingTop: 17 }}>
              {item.description}
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ThemeView>
        <View style={styles.root}>
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
          <Button
            mode="contained"
            onPress={onFinishExercisePress}
            style={styles.button}
          >
            Finish Exercising
          </Button>
        </View>
      </ThemeView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
    height: Dimensions.get("window").height - 70,
    width: Dimensions.get("window").width,
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    width: 250,
    height: "8%",
    borderRadius: 10,
    marginBottom: 15,
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
  video: {
    height: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
});

export default GetActiveScreen;
