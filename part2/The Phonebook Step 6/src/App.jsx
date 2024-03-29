import { useEffect, useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from "./components/Filter.jsx";
import PersonForm from './components/PersonForm.jsx'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])

  const [newFilter, setNewFilter] = useState('')

  const handleNewFilter= (event)=>{
    console.log(event.target.value);
    setNewFilter(event.target.value);
    for (let i = 0; i < persons.length; i++) {
      if(event.target.value == ""){
        persons[i].show = true;
      }  
      let result = persons[i].name.toLowerCase().match(event.target.value.toLowerCase());
      if (result===null) {
        persons[i].show = false; 
      }  
    }
    
  }

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
 console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleNewFilter={handleNewFilter} newFilter={newFilter} />

      
      <h3> Add a new</h3>
      
      <PersonForm setPersons={setPersons}  persons={persons}/>


      <h3>Numbers</h3>
      
      <ul>
        {persons.map(
          person =>
          <Persons key={person.id} person = {person}/>
        )}
      </ul>
      
    </div>
  )
}

export default App