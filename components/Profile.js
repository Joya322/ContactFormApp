import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import Card from './Card';

const Profile = () => {
    return (
      <View style={styles.container}>
        <Avatar />
        <Card/>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    padding: 5
  }
})

export default Profile;