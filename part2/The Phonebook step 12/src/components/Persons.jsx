import personsService from '../services/persons.js'


const Persons = ({persons, setErrorMsg , person, setPersons }) => {
  
  const deletePersons = (event)=>{
    event.preventDefault();
    if(confirm(`Delete ${person.name}?`)){
      let newPersons = persons.filter(
        p=>p.id!==person.id

      )
    personsService
    .deletePerson(person.id)
    .then(returnedData=>{
      setPersons(newPersons);
      alert(`Deleted ${returnedData.name}`);
    })
    .catch( error =>{
      console.log('error shown');
      setErrorMsg(
        `Information of ${person.name} has already been removed from server`);
      setTimeout(() => {
        setErrorMsg(null);
      }, 5000);
      
    })
  
  
  }
    
  }


  //console.log('logged Persons');
  //console.log(person.show);
  if(person.show === true){
    //console.log('Show is true:');
    //console.log(person.name);
    return (
      
      <li>{person.name} {person.number} 
      <button onClick={deletePersons} >delete</button>
      </li>
      
    )}
  }
  
  export default Persons