import { View, StyleSheet } from 'react-native'
import React from 'react'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})