import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Avatar, Card, Paragraph, Title } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import GestureRecognizer from "react-native-swipe-gestures";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const HobbySwipeScreen = ({ route }) => {
  const { hobbiesArr } = route.params;
  const [currIndex, SetCurrIndex] = useState(0);
  const [hobbies, setHobbies] = useState(hobbiesArr);
  const carousel = useRef(null);
  const [isViewingDetails, setIsViewingDetails] = useState(false);
  const navigation = useNavigation();

  const renderItem = (item, index) => {
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

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: "30%" }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 10,
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
    margin: "3%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "20%",
  },
});

export default HobbySwipeScreen;
