import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'

const getAll = () => {
  
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}
const getOne = (name)=>{
    let startURL='https://studies.cs.helsinki.fi/restcountries/api/name/';
    const endURL = startURL+name;
    
    const request = axios.get(endURL);
    return request.then(response => response.data);


}

export default { 
    getAll,
    getOne

  }