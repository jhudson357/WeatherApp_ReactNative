import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const {iconName, iconColor, bodyText, bodyTextStyles} = props

  const { container, textTheme} = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold',
  }
})