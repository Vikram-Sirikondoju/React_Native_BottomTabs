import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const AbouScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>AbouScreen</Text>
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

export default AbouScreen