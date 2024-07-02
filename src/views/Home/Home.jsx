import React from 'react'
import "./Home.css"
import Weather from '../../components/Weather/Weather'



const weatherData =[
  {
    city : "pune",
    temperature:22,
    weather : "rainy"
  },
  {
    city : "Nagpur",
    temperature:27,
    weather : "cloudy"
  },
  {
    city : "Jammu",
    temperature:7,
    weather : "snowy"
  },
  {
    city : "Jaipur",
    temperature:38,
    weather : "sunny"
  },
  {
    city : "Mumbai",
    temperature:30,
    weather : "sunny"
  },
  {
    city : "Nashik",
    temperature:26,
    weather : "cloudy"
  },
  {
    city : "Delhi",
    temperature:19,
    weather : "rainy"
  },
  {
    city : "Shirdi",
    temperature:25,
    weather : "cloudy"
  },
]

function Home() {
  return (<>
    <h1 className='heading'>Weather Cards</h1>
    <div className='wether-card-container'>
      
      {
        weatherData.map ((weatherObj,i)=>{

          const {weather,temperature,city}= weatherObj ;
          return(
            <Weather
             city={city}
             temperature={temperature}
             weather={weather}
             key={i}/>
          )

        })
      }
    </div>

  </>

  )
}

export default Home