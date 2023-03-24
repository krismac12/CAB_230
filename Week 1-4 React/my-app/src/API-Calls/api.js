export function fetchUser(i){
    const url = 'https://reqres.in/api/users/' +i;
    return fetch(url)
    .then(res => res.json())
    .then(res => res.data);
}

export function fetchForecast(cityName){
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