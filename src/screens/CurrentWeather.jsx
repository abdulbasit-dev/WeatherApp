import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Platform
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RowText } from '../components'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  // destructuring styles
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  
  const weatherCondition = weather[0].main
  const weatherTypeInfo = weatherType[weatherCondition]

  return (
    <SafeAreaView
      style={[wrapper, { backgroundColor: weatherTypeInfo.backgroundColor }]}
    >
      <View style={container}>
        <Feather name={weatherTypeInfo.icon} size={100} color="black" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>Feels {feels_like}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherTypeInfo.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for Android status bar
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
