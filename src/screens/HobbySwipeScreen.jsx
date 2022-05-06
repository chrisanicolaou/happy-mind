import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Card, Paragraph, Title } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import GestureRecognizer from "react-native-swipe-gestures";

const HobbySwipeScreen = ({ route }) => {
  const { hobbiesArr } = route.params;
  const [currIndex, SetCurrIndex] = useState(0);
  const [card, setCard] = useState({});
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  useEffect(() => {
    console.log(currIndex);
    setCard({
      header: hobbiesArr[currIndex].name,
      picture: hobbiesArr[currIndex].firstPicture,
      description: null,
      learnMoreLink: null,
    });
  }, [currIndex]);

  const showCardDetails = () => {
    if (!isViewingDetails) {
      console.log("Adding link", hobbiesArr[currIndex]);
      setCard({
        header: `Get started on your ${hobbiesArr[currIndex].name} adventure!`,
        picture: hobbiesArr[currIndex].secondPicture,
        description: hobbiesArr[currIndex].description,
        learnMoreLink: hobbiesArr[currIndex].learnMoreLink,
      });
    } else {
      setCard({
        header: hobbiesArr[currIndex].name,
        picture: hobbiesArr[currIndex].firstPicture,
        description: null,
        learnMoreLink: null,
      });
    }
    setIsViewingDetails(!isViewingDetails);
  };

  const changeIndex = (num) => {
    let result = currIndex + num;
    if (result > 0 && result < hobbiesArr.length) {
      SetCurrIndex(result);
    }
  };

  return (
    <GestureRecognizer
      onSwipeRight={() => changeIndex(-1)}
      onSwipeLeft={() => changeIndex(1)}
    >
      <ScrollView>
        <View style={styles.root}>
          <Text>Swipe for a new hobby!</Text>
          <Card onPress={showCardDetails}>
            <Card.Content>
              <Title>{card.header}</Title>
            </Card.Content>
            <Card.Cover
              source={{ uri: card.picture }}
              style={{ width: 300, height: 300 }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Text
                size={30}
                label="L"
                theme={{ colors: { primary: "green" } }}
              />
              <Avatar.Text
                size={30}
                label="R"
                theme={{ colors: { primary: "red" } }}
              />
            </View>
            <Card.Content>
              {card.description ? (
                <Paragraph
                  style={{
                    maxWidth: 250,
                    alignSelf: "center",
                    textAlign: "center",
                  }}
                >
                  {card.description}
                </Paragraph>
              ) : null}
            </Card.Content>
            {card.learnMoreLink ? (
              <CustomButton
                text="Learn More"
                onPress={() => {
                  Linking.openURL(card.learnMoreLink);
                }}
              ></CustomButton>
            ) : null}
          </Card>
        </View>
      </ScrollView>
    </GestureRecognizer>
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
