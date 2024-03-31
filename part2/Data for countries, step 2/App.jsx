import { useEffect, useState } from "react"

import axios from "axios";
import Language from "./components/Language";
import Country from "./components/Country";


const App = ()=>{
    const [country, setCountry] = useState('');
    const [countries ,setCountries] = useState([]);
    const [message, setMessage] = useState(null);
    
    
    const matchName = (allCountries)=>{
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
        console.log(interested);
        for(let key in interested.languages){
            let language ={name: interested.languages[key],
            keyVal: languages.length +1};

            languages.push(language)
        }
        
        return(<div>Find Countries: 
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
           

            
            
        </div> 
       )  
    }else if(countries.length>0){
        console.log('object');
        console.log(countries);

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