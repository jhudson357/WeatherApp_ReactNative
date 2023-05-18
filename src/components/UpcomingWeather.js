import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})