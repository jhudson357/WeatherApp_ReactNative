import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  const {container, errorMessage} = styles
  
  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry, something went wrong</Text>
      <Feather name={'frown'} size={25} color={'white'} />
    </View>
  )
}

export default ErrorItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center',
  },
})