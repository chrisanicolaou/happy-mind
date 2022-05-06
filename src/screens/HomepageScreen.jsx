import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigation } from "@react-navigation/native";

const HomepageScreen = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}> Welcome <Text style={styles.name}>{user.username} </Text>😊 </Text>
      </View>
    )
  }

  const Boxes = () => {
    
    return (
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box} onPress={() =>  navigation.navigate("PickInterests")}>
        <Text style={styles.boxheader}> INTERESTS </Text>
          <View style={styles.inner}>
          <Image style={styles.imageSetting} source={require('../../images/home-page-pics/discover.jpg')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Meditate')}>
        <Text style={styles.boxheader}> MEDITATATION </Text>
          <View elevation={5} style={styles.inner}>
          <Image style={styles.imageSetting} source={require('../../images/home-page-pics/meditate.jpg')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('FitnessOptions')}>
          <Text style={styles.boxheader}> ACTIVITY </Text>

          <View style={styles.inner}>
          <Image style={styles.imageSetting} source={require('../../images/home-page-pics/active-lady.jpg')} />       
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
        <Text style={styles.boxheader}> SETTINGS </Text>
          <View style={styles.inner}>
          <Image style={styles.imageSetting} source={require('../../images/home-page-pics/settings.jpg')} />       
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Boxes/>
    </SafeAreaView>

    /* old styling */

    // <View style={style.body}>
    //   <Text style={style.headerText}>Welcome, {user.username} 😊!</Text>
    //   <View style={style.tapWrapper}>
    //     <Text
    //       onPress={() => {
    //         navigation.navigate("PickInterests");
    //       }}
    //       style={style.tap}
    //     >
    //       Do something new
    //     </Text>
    //     <Text
    //       onPress={() => {
    //         navigation.navigate("Meditate");
    //       }}
    //       style={style.tap}
    //     >
    //       Meditate
    //     </Text>
    //     <Text
    //       onPress={() => {
    //         navigation.navigate("FitnessOptions");
    //       }}
    //       style={style.tap}
    //     >
    //       Get active!
    //     </Text>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#faa307'
  },
  title: {
    fontSize: 20,
    color: "#00171f",
    textAlign: "center",
    textShadowColor: '#00171f',
    textShadowOffset: {width: 1, height: 0},
    textShadowRadius: 20
  },
  header: {
    width: '100%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 25,
    color: "#fbff12",
    textAlign: "center",
    textShadowColor: '#fbff12',
    textShadowOffset: {width: 1, height: 0},
    textShadowRadius: 20
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,

  },
  imageSetting: {
    resizeMode: "cover",
    width: '100%',
    height: '100%',
    borderRadius: 15,
    borderWidth: 4,
  },
  boxheader: {
    textAlign: 'center',
    fontSize: 20,
    color: "#00171f",
    textShadowColor: '#00171f',
    textShadowOffset: {width: 4, height: 0},
    textShadowRadius: 20
  },
  inner: {
    flex: 1, 
    alignItems: 'center',
  }
  
  // click: {
  //   backgroundColor: "white",
  //   width: 150,
  //   height: 150,
  //   margin: 1,
  //   color: "black",
  //   lineHeight: 25,
  //   textAlign: "center",
  //   fontSize: 15,
  //   borderRadius: 100 / 2,
  //   backgroundColor: "coral",
  // }
  




/* old styling */

  // body: {
  //   backgroundColor: "beige",
  //   flex: 1,
  //   borderColor: "black",
  // },
  // headerText: {
  //   color: "black",
  //   fontSize: 45,
  //   alignSelf: "center",
  //   borderWidth: 4,
  //   borderColor: "lightslategrey",
  //   borderRadius: 100 / 2,
  //   backgroundColor: "lightslategrey",
  // },
  // tapWrapper: {
  //   flex: 1,
  //   padding: 120,
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  // },
  // tap: {
  //   backgroundColor: "white",
  //   width: 150,
  //   height: 150,
  //   margin: 1,
  //   color: "black",
  //   lineHeight: 25,
  //   textAlign: "center",
  //   fontSize: 15,
  //   borderRadius: 100 / 2,
  //   backgroundColor: "coral",
  // },
});
export default HomepageScreen;
