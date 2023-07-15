import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import { CurrentWeather, UpcomingWeather, City } from './src/screens'

const App = () => {
  return (
    <View style={styles.container}>
        {/* <CurrentWeather /> */}
        {/* <UpcomingWeather /> */}
        <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
