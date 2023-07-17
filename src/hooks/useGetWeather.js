import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export default useGetWeather = () => {
  const [weather, setWeather] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError('could not fetch weather')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        console.log(error)
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [])

  return [loading, error, weather]
}
