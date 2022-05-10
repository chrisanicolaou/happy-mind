import {
  View,
  StyleSheet,
  Linking,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import ThemeView from "../components/ThemeView";

const HobbySwipeScreen = ({ route }) => {
  // -----RETRIEVED DATA-----

  const { hobbiesArr } = route.params;

  // -----STATES-----

  const [currIndex, SetCurrIndex] = useState(0);
  const [hobbies, setHobbies] = useState(hobbiesArr);
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  // -----REFS-----

  const carousel = useRef(null);

  // -----STACK NAVIGATOR-----

  const navigation = useNavigation();

  // -----FUNCTIONS-----

  const renderItem = (item) => {
    if (!isViewingDetails || item.index !== currIndex) {
      return (
        <Card onPress={showCardDetails} style={styles.card} elevation={5}>
          <Card.Content>
            <Title style={{ textAlign: "center" }}>{item.item.name}</Title>
          </Card.Content>
          <Card.Cover
            source={{ uri: item.item.firstPicture }}
            style={styles.cardImage}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
        </Card>
      );
    } else {
      return (
        <Card onPress={showCardDetails} style={styles.card} elevation={5}>
          <Card.Content>
            <Title
              style={{ textAlign: "center" }}
            >{`Get started on your ${hobbiesArr[currIndex].name} adventure!`}</Title>
          </Card.Content>
          <Card.Cover
            source={{ uri: item.item.secondPicture }}
            style={styles.cardImage}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
          <Card.Content>
            <Paragraph
              style={{
                maxWidth: 250,
                alignSelf: "center",
                textAlign: "center",
                paddingTop: "5%",
              }}
            >
              {item.item.description}
            </Paragraph>
          </Card.Content>
          <Button
            mode="contained"
            onPress={() => {
              Linking.openURL(item.item.learnMoreLink);
            }}
            style={styles.learnMoreButton}
          >
            Learn More
          </Button>
        </Card>
      );
    }
  };

  const showCardDetails = () => {
    setIsViewingDetails(!isViewingDetails);
  };

  const onBackButtonPress = () => {
    navigation.navigate("PickInterests");
  };

  // -----RENDER-----

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeView>
        <View style={styles.root}>
          <Carousel
            lockScrollWhileSnapping={true}
            swipeThreshold={10}
            layout={"default"}
            ref={carousel}
            data={hobbies}
            sliderWidth={380}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index) => {
              SetCurrIndex(index);
              setIsViewingDetails(false);
            }}
          />
        </View>
        <Button
          mode="contained"
          onPress={onBackButtonPress}
          style={styles.backButton}
        >
          Back
        </Button>
      </ThemeView>
    </SafeAreaView>
  );
};

// -----STYLES-----

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    height: Dimensions.get("window").height - 120,
    width: Dimensions.get("window").width,
  },
  card: {
    paddingBottom: 10,
  },
  cardImage: {
    width: 280,
    height: 300,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
  },
  learnMoreButton: {
    width: "75%",
    margin: "3%",
    alignSelf: "center",
    borderRadius: 10,
  },
  backButton: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "3%",
  },
  store: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "3%",
  },
});

export default HobbySwipeScreen;
