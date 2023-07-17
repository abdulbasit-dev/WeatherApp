import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useGetWeather } from './src/hooks'
import Tabs from './src/components/Tabs'
import { ErrorItem } from './src/components'

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(weather);

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size="large" color="blue" />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
