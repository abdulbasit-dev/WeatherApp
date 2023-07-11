import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
  View,
  Image,
  ImageBackground
} from 'react-native'

import { Feather } from '@expo/vector-icons'

const image = require('../../assets/upcoming-background.jpg')

const data = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ],
    clouds: {
      all: 97
    },
    wind: {
      speed: 1.06,
      deg: 66,
      gust: 2.16
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      '1h': 0.13
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2022-08-30 16:00:00'
  },
  {
    dt: 1661878800,
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 932,
      humidity: 53,
      temp_kf: 0.11
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ],
    clouds: {
      all: 95
    },
    wind: {
      speed: 1.58,
      deg: 103,
      gust: 3.52
    },
    visibility: 10000,
    pop: 0.4,
    rain: {
      '1h': 0.24
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2022-08-30 17:00:00'
  },
  {
    dt: 1661882400,
    main: {
      temp: 294.94,
      feels_like: 294.74,
      temp_min: 292.84,
      temp_max: 294.94,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 931,
      humidity: 60,
      temp_kf: 2.1
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n'
      }
    ],
    clouds: {
      all: 93
    },
    wind: {
      speed: 1.97,
      deg: 157,
      gust: 3.39
    },
    visibility: 10000,
    pop: 0.33,
    rain: {
      '1h': 0.2
    },
    sys: {
      pod: 'n'
    },
    dt_txt: '2022-08-30 18:00:00'
  }
]

const Item = (props) => {
  const [data, setData] = useState([])

  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color="red" />
      {/* <Text style={styles.condition}>Condition:- {condition}</Text> */}
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <Text>UpcomingWeather</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  item: {
    padding: 20,
    backgroundColor: 'pink',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  temp: {
    fontSize: 20,
    color: 'white'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
