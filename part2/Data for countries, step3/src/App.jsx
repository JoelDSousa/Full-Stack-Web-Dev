import { useEffect, useState } from "react"

import axios from "axios";
import Language from "./components/Language";
import Country from "./components/Country";
import weather from "./services/weather";


const App = ()=>{
    const [country, setCountry] = useState('');
    const [countries ,setCountries] = useState([]);
    const [message, setMessage] = useState(null);
    const [resultWeather, setWeather] = useState(null);
    
    
    
    
    
    
    
    const matchName = async(allCountries)=>{
        const copyCountries = [];
        for (let i = 0; i < allCountries.length; i++) {
            for(let j = 0; j<allCountries[i].altSpellings.length;j++){
                
                if(allCountries[i].altSpellings[j].
                    toLowerCase().match(country.toLowerCase()) || 
                    allCountries[i].name.common.toLowerCase().match(country.toLowerCase())){
                        
                        copyCountries.push(allCountries[i]);
                    break;
                }
            }
            
            
        }
        if (copyCountries.length>10) {
            setMessage('Too many matches, specify another filter'); 
             
        }else{
            setCountries(copyCountries);
            setMessage(null);
            if (copyCountries.length > 0) {
                const capital = copyCountries[0].capital;
                try {
                    const weatherData = await fetchWeather(capital);
                    setWeather(weatherData); // Assuming you have a state variable to store weather data
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                    // Handle error appropriately, such as setting an error message
                }
            }


        }
        

    }


    useEffect(()=>{
        if (country!=='') {
           
            axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all/')
            .then(response =>{                
                matchName(response.data);
                })
                
        }
    },[country])

    const handleChange = (event)=>{
        event.preventDefault();
        setCountry(event.target.value)

    }



async function fetchWeather(capital){
    let geoData = await weather.getCity(capital);
    
    let weatherInfo = await weather.getWeather(geoData[0]) 
     
    return {
        windSpeed: weatherInfo.wind.speed,
        temperature: Number((weatherInfo.main.temp-273.15).toFixed(1)),
        icon: `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
    }

}







//-------------------------------------------------------------------------
//                 RETURNS
//-------------------------------------------------------------------------
    
    if (message){
        return(
            <div>Find Countries: 
            <input type="text" value={country} onChange={handleChange}/>
            <p>{message}</p>
        </div>
    )}else if (countries.length===1) {
        
        let interested = countries[0];
        
        
        
        
        
        let languages = [];
        
        for(let key in interested.languages){
            let language ={name: interested.languages[key],
            keyVal: languages.length +1};

            languages.push(language)
        }
        
        return(
        <div>Find Countries: 
            <input type="text" value={country} onChange={handleChange}/>
            <h1> {interested.name.common} </h1>
            <p>Capital: {interested.capital}</p>
            <p>Area: {interested.area}</p>
            <h3>Languages</h3>
            <ul>
            {languages.map(
                language =>
                <Language  
                key={language.keyVal}   
                language = {language}/>
                )}
            </ul>
            <img src={interested.flags.png} alt={interested.flags.alt} />
            <h2>Weather in {interested.capital}</h2>
           <h3>Temperature: {resultWeather.temperature}º Celsius</h3>
           <img src={resultWeather.icon} alt="" />
           <h3>Wind: {resultWeather.windSpeed} m/s</h3>

            
            
        </div> 
       ) 
    }else if(countries.length>0){
        

        return(
            <div>Find Countries: 
            <input type="text" value={country} onChange={handleChange}/>
            <h3>Countries</h3>
            <ul>
            {countries.map(
                c =>
                <Country key={c.name.common} 
                 name={c.name.common} 
                 countries={countries}
                 setCountries={setCountries}
                 />
                )}
            </ul>
            
        </div>
                   
        )

    }else{
        return(
            <div>Find Countries: 
            <input type="text" value={country} onChange={handleChange}/>
            <p>{message}</p>
            
        </div>
        )
    }
    
}

export default App