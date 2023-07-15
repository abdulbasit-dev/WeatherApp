import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { CurrentWeather, UpcomingWeather, City } from './src/screens'
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Current"
          component={CurrentWeather}
          options={{
            tabBarLabel: 'Current Weather',
            tabBarIcon: ({ color, size }) => (
              <Feather name={'sun'} size={20} color="black" />
            )
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={UpcomingWeather}
          options={{
            tabBarLabel: 'Upcoming Weather',
            tabBarIcon: ({ color, size }) => (
              <Feather name={'cloud'} size={20} color="black" />
            )
          }}
        />
        <Tab.Screen
          name="City"
          component={City}
          options={{
            tabBarLabel: 'City',
            tabBarIcon: ({ color, size }) => (
              <Feather name={'map-pin'} size={20} color="black" />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
