import { View, Text } from "react-native";
import React from "react";

const MeditateScreen = () => {
  return (
    <ScrollView>
      <View style={Styles.detailsImageWrapper}>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <Text>MeditateScreen</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  detailsImageWrapper: {},
});

export default MeditateScreen;
