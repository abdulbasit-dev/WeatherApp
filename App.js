import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import * as Location from 'expo-location'
import axios from 'axios'
import { useAxios } from './src/hooks'
// import { WEATHER_API_KEY } from '@env'


import Tabs from './src/components/Tabs'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  //   const {data , error, loading} = useAxios()

//   console.log(WEATHER_API_KEY);


  useEffect(() => {
    setLoading(true);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      console.log(status)
      if (status !== 'granted') {r
        setError('Permission to access location was denied')
        console.log(error)
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    //   console.log(location)

      let URL = `api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=243f6bc2d505597f934ab19467c12857`
    //   console.log(URL)

      // call open weather api
      //   try {
      //     const res = await axios.get(URL)
      //     console.log(res.data)
      //   } catch (error) {
      //     console.log(error)
      //   }

      setLoading(false)
    })()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
