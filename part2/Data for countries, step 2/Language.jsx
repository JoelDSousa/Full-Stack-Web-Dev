const Language = ({language})=>{
    console.log('Entered Language');
    console.log(language.name);

    return(
        <li>{language.name}</li>
    )
}

export default Language