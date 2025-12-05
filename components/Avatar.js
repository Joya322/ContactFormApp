import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const Avatar = () => {
  const { width } = useWindowDimensions();
    const largeScreen = 768;
  
  const dynamicHeaderFontSize = width > largeScreen ? 50 : 30;
  
  const dynamicHeaderStyle = {
    fontSize: dynamicHeaderFontSize
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, dynamicHeaderStyle]}>Profile</Text>
      <Image style={styles.tinyLogo} source={require("../assets/avatar.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  tinyLogo: {
    width: 220,
    height: 220,
    borderRadius: 110,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Avatar;
