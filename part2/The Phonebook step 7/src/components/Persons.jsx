const Persons = ({ person }) => {
  
  //console.log('logged Persons');
  //console.log(person.show);
  if(person.show === true){
    //console.log('Show is true:');
    //console.log(person.name);
    return (
      
      <li>{person.name} {person.number}</li>
    )}
  }
  
  export default Persons