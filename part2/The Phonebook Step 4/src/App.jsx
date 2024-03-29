import { useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from "./components/Filter.jsx";
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456',show: true, id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',show: true, id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345',show: true, id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',show: true, id: 4 }
  ])

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