import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
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

export default HomeScreen