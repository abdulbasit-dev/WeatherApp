import { useState, useEffect } from 'react'
import axios from 'axios'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export default useGetWeather = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  console.log(WEATHER_API_KEY);

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      console.log(status)
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        console.log(error)
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)

    //   let URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=243f6bc2d505597f934ab19467c12857`
        let URL = `http://api.openweathermap.org/data/2.5/forecast?lat=metric&${lat}&lon=${lon}&appid=${WEATHER_API_KEY}}`

      // fetch weather data
      try {
        const res = await axios.get(URL)
        setData(res.data)
        setError(null)
      } catch (error) {
        setError('Could not fetch weather data')
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return [loading, error, data]
}
