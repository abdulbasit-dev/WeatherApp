import React from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  View
} from 'react-native'
import moment from 'moment'

const img = require('../../assets/city-background.jpg')
import { IconText } from '../components'

const City = ({ city }) => {
  const { name, country, population, sunrise, sunset } = city

  // destructuring styles
  const {
    cityName,
    cityText,
    populationWrapper,
    populationText,
    countryName,
    container,
    image,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={img} style={image}>
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[rowLayout, populationWrapper]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText={population.toString()}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[rowLayout, riseSetWrapper]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'red'}
            bodyText={moment.unix(sunrise).format('HH:mm:ss')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'red'}
            bodyText={moment.unix(sunset).format('HH:mm:ss')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    color: 'white'
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30,
    color: 'black',
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
