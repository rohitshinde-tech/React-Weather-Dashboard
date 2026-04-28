import { useState } from 'react';
import InfoBox from './InfoBox'
import SearchBox from './SearchBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState({
     city:"Pune",
     feelslike :24.84,
     temp:25.05 ,
     tempMin: 25 ,
     tempMax:25,
     humidity:25,
     weather: "haze",
    });
    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
   <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
    
}



