import countriesService from "../services/countries";


const Country = ({name, countries, setCountries})=>{
    console.log('Entered Country');
    console.log(name);
    
    const showOne = (event)=>{
        event.preventDefault();
        
        countriesService
        .getOne(name)
        .then(returnedData=>{
            console.log('Clicked show');
            console.log(returnedData);
            let copyCountry = [returnedData]
            setCountries(copyCountry);
            console.log('Country data');
            console.log(countries);
          })}

    return(
        <li>{name}
        <button onClick={showOne} >show</button>
        </li>
    )
}

export default Country