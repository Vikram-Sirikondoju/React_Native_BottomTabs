import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const ServicesScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>ServicesScreen</Text>
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

export default ServicesScreen