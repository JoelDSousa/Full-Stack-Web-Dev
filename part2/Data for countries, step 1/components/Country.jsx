const Country = ({name})=>{
    console.log('Entered Country');
    console.log(name);

    return(
        <li>{name}</li>
    )
}

export default Country