import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const HomepageScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <View>
      <h2>Hello, {user.username}!</h2>
    </View>
  );
};

export default HomepageScreen;
