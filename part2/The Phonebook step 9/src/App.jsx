import { useEffect, useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from "./components/Filter.jsx";
import PersonForm from './components/PersonForm.jsx'
import axios from 'axios';
import personsService from './services/persons.js'

const App = () => {

  console.log('Defined empty:');

  const [persons, setPersons] = useState([])
  console.log('After empty:');
  console.log(persons);



  const hook =()=>{
    console.log('Effect Happened');
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      console.log('Fullfiled');
      setPersons(response.data)
    })
  }
  useEffect(hook,[])

  const updatePersons = (updatedPersons)=>{
    console.log('Updatedpersons:');
    console.log(updatedPersons);
    setPersons(updatedPersons)
    
  }
  console.log('Persons: ');
  console.log(persons);


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updatePersons={updatePersons} persons={persons}/>

      
      <h3> Add a new</h3>
      
      <PersonForm setPersons={setPersons}  persons={persons}/>


      <h3>Numbers</h3>
      
      <ul>
        {persons.map(
          person =>
          <Persons key={person.id} setPersons={setPersons} persons={persons} person = {person}/>
        )}
      </ul>
      
    </div>
  )
}

export default App