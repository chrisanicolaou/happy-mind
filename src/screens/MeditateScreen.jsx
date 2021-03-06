import { StyleSheet, View, Dimensions, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { Text } from "react-native-paper";
import ThemeView from "../components/ThemeView";

const { width } = Dimensions.get("window");
const circleWidth = width / 2;

const MeditateScreen = () => {
  const translation = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translation, {
            toValue: 100,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(textOpacity, {
            delay: 1000,
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(translation, {
            delay: 1100,
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  const exhale = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <ThemeView>
      <View style={styles.container}>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFillObject,
            alignItems: "center",
            justifyContent: "center",
            opacity: textOpacity,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "800" }}> Inhale </Text>
        </Animated.View>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFillObject,
            alignItems: "center",
            justifyContent: "center",
            opacity: exhale,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "800" }}> Exhale </Text>
        </Animated.View>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          const rotation = translation.interpolate({
            inputRange: [0, 100],
            outputRange: [`${item * 45}deg`, `${item * 45 + 360}deg`],
          });
          return (
            <Animated.View
              key={item}
              style={{
                backgroundColor: "indianred",
                opacity: 0.15,
                width: circleWidth,
                height: circleWidth,
                borderRadius: circleWidth / 2,
                ...StyleSheet.absoluteFillObject,
                transform: [
                  { translateX: 0 },

                  {
                    rotate: rotation,
                  },
                  {
                    translateY: translation,
                  },
                ],
              }}
            ></Animated.View>
          );
        })}
      </View>
    </ThemeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    left: width / 4,
    top: width / 1.6,
  },
});

export default MeditateScreen;
