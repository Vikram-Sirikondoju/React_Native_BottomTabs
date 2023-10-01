import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>ProfileScreen</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileScreen