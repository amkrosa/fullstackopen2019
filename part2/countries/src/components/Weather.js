import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather]=useState([])

    useEffect(()=>{
        console.log('entered useeffect')
        axios
        .get(`http://api.apixu.com/v1/current.json?key=aab266a7da2b4170b9d141908191906&q=%22${capital}%22`)
        .then(response => {
          console.log('promise fulfilled')
          setWeather(response.data["current"])
          console.log(response.data["current"])
        })
      },[capital])


    const temp = weather["temp_c"]
    const wind = `${weather["gust_kph"]}kph direction ${weather["wind_dir"]}`
    if (weather["condition"]){
        const conditionText = weather["condition"]["text"]
        const conditionIcon = weather["condition"]["icon"]
        return(
            <div>
                <h2>Weather in {capital}</h2>
                <div>Temperature: {temp} Celsius</div>
                <div>Condition: {conditionText}
                <div><img src={conditionIcon} alt='conditionIcon'/></div>
                </div>
                
                <div>Wind: {wind}</div>
            </div>
        )
    }else{
        return null
    }  
}
export default Weather