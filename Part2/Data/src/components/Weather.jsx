import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios';

const Weather = ({c}) => {
    const apiKey = import.meta.env.VITE_WEATHER_KEY;
    
    const [currentweather, setcurrentweather] = useState([])

    useEffect (()=> {
    axios
    .get(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${c}`)
    .then(response=> {
        console.log(response.data.current);
        setcurrentweather(response.data.current)
    }) 
  }, [])
  

  return (
    <div>
        <p>Temperature in {c} is {currentweather.temperature} Celcius</p>
        <img src={currentweather.weather_icons} alt='weather icon'/>
        <p>Wind {currentweather.wind_speed} m/s</p>
        
      
    </div>
  )
}

export default Weather
