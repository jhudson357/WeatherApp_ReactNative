import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  // console.log(weatherData)

  // destructure weatherData
  const { main: { temp, feels_like, temp_max, temp_min}, weather } = weatherData
  // pull weatherCondition from weather (which comes from weatherData^)
  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView 
      style={[
        wrapper, 
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
        // weatherType is our file in utilities folder
      ]}
    >
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{`${temp}°F`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°F`}</Text>
        <RowText 
          messageOne={`High: ${temp_max}°F`}
          messageTwo={`Low: ${temp_min}°F`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText 
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'white',
  },
  highLow: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 6,
    marginTop: 6,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    color: 'white',
  },
  message: {
    fontSize: 25,
    color: 'white',
  },
})