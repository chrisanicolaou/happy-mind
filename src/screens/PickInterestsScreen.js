import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";

const PickInterestsScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <View>
      <Text>PickInterestsScreen</Text>
      <Text>Hello, {user.username}!</Text>
    </View>
  );
};

export default PickInterestsScreen;
