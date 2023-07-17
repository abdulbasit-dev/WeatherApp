import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ImageBackground
} from 'react-native'

import { ListItem } from '../components'
const img = require('../../assets/upcoming-background.jpg')

const UpcomingWeather = ({ weatherData }) => {

  const renderItem = ({ item }) => (
    <ListItem
      dt_txt={item?.dt_txt}
      min={item?.main.temp_min}
      max={item?.main.temp_max}
      condition={item?.weather[0].main}
    />
  )

  //   destructure the styles object
  const { image, container } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={img}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item?.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
