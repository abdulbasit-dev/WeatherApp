import React from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  View
} from 'react-native'
const img = require('../../assets/city-background.jpg')
import { IconText } from '../components'

const City = () => {

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
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>
        <View style={[rowLayout, populationWrapper]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText="8000"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[rowLayout, riseSetWrapper]}>
          <IconText
            iconName="sunrise"
            iconColor="red"
            bodyText="10:46:58am"
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="red"
            bodyText="17:28:15pm"
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
    marginTop: StatusBar.currentHeight || 0,
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
    fontSize: 30
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
