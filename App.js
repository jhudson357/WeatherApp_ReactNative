import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'


const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        )
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      
      // error handling
      if (status !== 'granted') {
        setError('Permission to access locaion was denier')
        return
      }

      // successful request
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()  // empty paretheses at end invoke the function right away
  }, [lat, lon])


  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }

  if (weather) {
    console.log(weather)
    console.log(lon)
    console.log(lat)
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})