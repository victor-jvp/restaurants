import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { loadImageFromGallery } from '../../utils/helpers'

export default function InfoUser({ user }) {
  
  const changePhoto = async() => {
    const result = await loadImageFromGallery([1, 1])
    console.log(result)
  }
  
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        onPress={changePhoto}
        containerStyle={styles.avatar}
        source={
          user.photoURL
            ? { uri: photoURL }
            : require("../../assets/avatar-default.jpg")
        }
      />
      <View style={styles.infoUser}>
        <Text style={styles.displayName}>{user.displayName ? user.displayName : "Anónimo"}</Text>
        <Text>{ user.email }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 30,
  },
  infoUser: {
    marginLeft: 20
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5
  }
});
