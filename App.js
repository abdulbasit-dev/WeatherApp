import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import { CurrentWeather, UpcomingWeather } from './src/components'

const App = () => {
  return (
    <View style={styles.container}>
        {/* <CurrentWeather /> */}
        <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
