import { useEffect, useState } from "react";

function fetchUser(i){
    const url = 'https://reqres.in/api/users/' +i;
    return fetch(url)
    .then(res => res.json())
    .then(res => res.data);
}

function fetchForecast(cityName){
    const url = "http://api.weatherapi.com/v1/forecast.json?key=2ecb896f2bb740608a811009232403&q="+cityName+"&days=7&aqi=no&alerts=no";
    return fetch(url)
    .then(res =>{
        if(res.status == 200){
            return res.json();
        }
        else{
            console.log(res.status);
            throw new Error(res.status);
        }
        
        }   
        )
}


export default function User(){
    const janet = {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    };
    const [user,setUser] = useState([]);
    const [forecast,setForecast] = useState();


    const UserInput = props =>{

        useEffect(() =>
            setCity()
        )
    }
    const[city,setCity] = useState([]);


    


    return(
        <div className="main">
            {useEffect(()=>{
            
                fetchForecast(city).then(forecast => setForecast(forecast));
                
            },[city])}
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
            {console.log(forecast)}            
        </div>
    )
}