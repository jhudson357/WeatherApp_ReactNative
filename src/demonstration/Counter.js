import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`${count}`)
    return() => {
      console.log('useEffect cleanup')
    }
  }, [count])
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`Count: ${newCount}`}</Text>
      <Button 
        color={'red'} 
        title={'Increase the count'}
        onPress={() => setCount(count+1)}
      />
      <Button 
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count-1)}
      />
      <Button 
        color={'red'} 
        title={'Increase the new count'}
        onPress={() => setNewCount(newCount+1)}
      />
      <Button 
        color={'green'}
        title={'Decrease the new count'}
        onPress={() => setNewCount(newCount-1)}
      />
    </SafeAreaView>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25,
  },
})