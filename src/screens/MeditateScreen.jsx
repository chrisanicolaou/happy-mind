import { StyleSheet, View, Text, Dimensions, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;

//const MeditateScreen = () => {
//   const move = useRef(new Animated.Value(0)).current;
//   Animated.timing(move, {
//     toValue: 1,
//     duration: 4000,
//     useNativeDriver: true,
//   });
//   const rotation = move.interpolate({
//     inputRange: [0, 1],
//     outputRange: [`0deg`, `180deg`],
//   });
//   // const translate = move.interpolate({
//   //   inputRange: [0, 1],
//   //   ouputRange: [0, circleWidth / 6],
//   // });
//   return (
//     <View style={styles.container}>
//       {[0, 1, 2, 3].map((item) => {
//         // const rotation = move.interpolate({
//         //   inputRange: [0, 1],
//         //   outputRange: [`0deg`, `180deg`],
//         // });
//         return (
//           <Animated.View
//             key={item}
//             style={{
//               backgroundColor: "purple",
//               width: circleWidth,
//               height: circleWidth,
//               borderRadius: circleWidth / 2,
//               ...StyleSheet.absoluteFillObject,
//               transform: [
//                 {
//                   rotateZ: rotation,
//                 },
//                 // {
//                 //   translateX: translate,
//                 // },
//                 // {
//                 //   translateY: translate,
//                 // },
//               ],
//             }}
//           ></Animated.View>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // headerText: {
//   //   color: "black",
//   //   fontSize: 45,
//   //   alignSelf: "center",
//   //   borderWidth: 4,
//   //   borderColor: "lightslategrey",
//   //   borderRadius: 100 / 2,
//   //   backgroundColor: "lightslategrey",
//   // },

//   container: {
//     flex: 1,
//     backgroundColor: "afff",
//     alignItems: "center",
//     justifyContent: "center",
//     left: width / 4,
//     top: height / 4,
//   },
// });

//export default MeditateScreen;

const MeditateScreen = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translation, {
          toValue: 100,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(translation, {
          delay: 1000,
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])

      // {
      //   rotate: translation.interpolate({
      //     inputRange: [0, 100],
      //     outputRange: [0, circleWidth / 2],
      //   }),
      // }
    ).start();
  }, []);
  // const translate = translation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, circleWidth / 6],
  // });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFillObject,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text> Inhale </Text>
      </View>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = translation.interpolate({
          inputRange: [0, 100],
          outputRange: [`${item * 45}deg`, `${item * 45 + 360}deg`],
        });
        return (
          <Animated.View
            key={item}
            style={{
              backgroundColor: "purple",
              // backgroundColor: translation.interpolate({
              //   inputRange: [0, 100],
              //   outputRange: ["orange", "blue"],
              // }),
              opacity: 0.1,
              // opacity: translation.interpolate({
              //   inputRange: [0, 50, 100],
              //   outputRange: [0, 1, 0],
              // }),
              width: circleWidth,
              height: circleWidth,
              alignItems: circleWidth,
              justifyContent: circleWidth,
              alignSelf: circleWidth,
              //margin: "center",

              borderRadius: circleWidth / 2,
              ...StyleSheet.absoluteFillObject,
              transform: [
                { translateX: translation },

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "afff",
    alignItems: "center",
    justifyContent: "center",
    left: width / 4,
    top: width / 4,
  },
});

export default MeditateScreen;
