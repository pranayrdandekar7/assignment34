import React from 'react'
import "./Weather.css"
import imgSunny from "./sunny.png"
import imgCloudy from "./cloudy.png"
import imgRainy from "./rainy.png"
import imgSwovy from "./snowy.png"

function Weather({temperature,weather,city,}) {


  const WEATHER_ICONS ={
    "rainy":imgRainy,
    "sunny": imgSunny,
    "cloudy": imgCloudy,
    "snowy" : imgSwovy
  }

  const WEATHER_BG_CLASSES={
    "rainy": "bg-rainy",
    "sunny": "bg-sunny",
    "cloudy": "bg-cloudy",
    "snowy" : "bg-snowy"
  }
  return (
    <div className={`card  ${WEATHER_BG_CLASSES[weather]}`}>
      <img src={WEATHER_ICONS [weather]} className='weather-icon'/>
     <p className='temperature'>{temperature}℃</p>
     <p className='weather'>{weather}</p>
     <p className='city'>{city}</p>
    </div>
   
    
  )
}

export default Weather