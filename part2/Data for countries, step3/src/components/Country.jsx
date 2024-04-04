import countriesService from "../services/countries";


const Country = ({name, countries, setCountries})=>{
    
    
    const showOne = (event)=>{
        event.preventDefault();
        
        countriesService
        .getOne(name)
        .then(returnedData=>{
            
            let copyCountry = [returnedData]
            setCountries(copyCountry);
            
          })}

    return(
        <li>{name}
        <button onClick={showOne} >show</button>
        </li>
    )
}

export default Country