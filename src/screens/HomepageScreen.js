import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const HomepageScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <View>
      <Text>Hello, {user.username}!</Text>
    </View>
  );
};

export default HomepageScreen;
