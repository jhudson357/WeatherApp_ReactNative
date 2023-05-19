import { StyleSheet, Text, SafeAreaView, FlatList, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  // console.log(weatherData)
  
  const renderItem = ({item}) => (
    <ListItem 
      condition={item.weather[0].main} 
      dt_text={item.dt_txt} 
      min={item.main.temp_min} 
      max={item.main.temp_max} 
    />
  )
  
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../assets/upcoming-background.jpg')} 
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  
  image: {
    flex: 1,
  },
})