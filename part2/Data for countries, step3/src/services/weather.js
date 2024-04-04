import axios from 'axios'
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=`
const api_key = import.meta.env.VITE_SOME_KEY
const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=` 


async function getCity(cityName){
    const usedUrl = geoUrl+cityName+'&limit='+1+'&appid='+api_key
    const data =  await axios.get(usedUrl)
                      .then(
                          r => {
                            
                            return r.data;}
                      )
                      .catch(
                        e =>{
                          console.log('Error ocurred', e);
                        }
                      )
    
    return data;
    
}

const getWeather = (geoData) => {    
    const usedUrl = baseUrl+geoData.lat+'&lon='+geoData.lon+'&appid='+api_key;
    const request = axios.get(usedUrl)
  return request.then(response => response.data)
}




export default { 
    getWeather,
    getCity

  }