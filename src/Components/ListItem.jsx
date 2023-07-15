import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
  const [data, setData] = useState([])
  const { dt_txt, min, max, condition } = props
  const { item, date, temp } = styles

  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color="red" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default ListItem
