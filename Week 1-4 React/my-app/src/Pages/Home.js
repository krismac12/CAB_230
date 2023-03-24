import { useEffect, useState } from "react";
import {fetchForecast,fetchUser} from "../API-Calls/api"




export default function User(){

    const [user,setUser] = useState([]);
    const [forecast,setForecast] = useState();
    const[city,setCity] = useState([]);


    {useEffect(()=>{
            
        fetchForecast(city).then(res => setForecast(res));
        
    },[city])}


    return(
        <div className="main">
            <h2>City</h2>
            <input type= "Text" onChange={(e) => setCity(e.target.value)}></input>
           { forecast ? <div className="Current">
                <h2>Current Forecast : {forecast.location.name}, {forecast.location.country}</h2>
                <ul>
                <li>Last Updated: {forecast.current.last_updated}</li>
                <li>Temp: {forecast.current.temp_c} C</li>
                <li>Condition: {forecast.current.condition.text}</li>
                <img src={forecast.current.condition.icon} alt="Logo" />
                </ul>
            </div> : <p>Loading...</p>}
            {forecast ? <div className="List">
                <h2>7 Day Forecast</h2>
                {forecast.forecast.forecastday.map((cast,index) =>(
                    <ul>
                        <h3><li>Date: {cast.date}</li></h3>
                        <li>Avg Temp: {cast.day.avgtemp_c}</li>
                        <li>Condition: {cast.day.condition.text}</li>
                        <img src={cast.day.condition.icon} alt="Logo" />

                    </ul>
                ))}
            </div> : <p></p>}
        </div>
    )
}