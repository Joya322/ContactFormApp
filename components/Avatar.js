import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
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
    fontSize: 30,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Avatar;
