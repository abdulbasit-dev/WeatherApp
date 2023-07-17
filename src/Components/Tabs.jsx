import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { CurrentWeather, UpcomingWeather, City } from '../screens'
const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          color: 'tomato',
          fontSize: 25,
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarLabel: 'Current Weather',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarLabel: 'Upcoming Weather',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarLabel: 'City',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
