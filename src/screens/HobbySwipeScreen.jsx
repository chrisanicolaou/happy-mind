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
        <Card onPress={showCardDetails}>
          <Card.Content>
            <Title>{item.item.name}</Title>
          </Card.Content>
          <Card.Cover
            source={{ uri: item.item.firstPicture }}
            style={{ width: 300, height: 300 }}
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
        <Card onPress={showCardDetails}>
          <Card.Content>
            <Title>{`Get started on your ${hobbiesArr[currIndex].name} adventure!`}</Title>
          </Card.Content>
          <Card.Cover
            source={{ uri: item.item.secondPicture }}
            style={{ width: 300, height: 300 }}
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
              }}
            >
              {item.item.description}
            </Paragraph>
          </Card.Content>
          <CustomButton
            text="Learn More"
            onPress={() => {
              Linking.openURL(item.item.learnMoreLink);
            }}
          ></CustomButton>
        </Card>
      );
    }
  };

  const showCardDetails = () => {
    setIsViewingDetails(!isViewingDetails);
  };

  const onBackButtonPress = () => {
    navigation.navigate("Homepage");
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
      <CustomButton
        text="Back"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        onPress={onBackButtonPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
});

export default HobbySwipeScreen;
