import { useEffect, useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from "./components/Filter.jsx";
import PersonForm from './components/PersonForm.jsx'
import axios from 'axios';
import personsService from './services/persons.js'
import './index.css'
import Notification from './components/Notification.jsx';


const App = () => {

  const [persons, setPersons] = useState([])
  const [alertMsg,setAlertMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const hook =()=>{
   
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      
      setPersons(response.data)
    })
  }
  useEffect(hook,[])

  const updatePersons = (updatedPersons)=>{
    setPersons(updatedPersons)
    
  }
  


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMsg} error = {true}/>
      <Notification message={alertMsg} error = {false}/>
      <Filter updatePersons={updatePersons} persons={persons}/>

      
      <h3> Add a new</h3>
      
      <PersonForm  setPersons={setPersons} setAlertMsg = {setAlertMsg} persons={persons}/>


      <h3>Numbers</h3>
      
      <ul>
        {persons.map(
          person =>
          <Persons setErrorMsg={setErrorMsg} key={person.id} setPersons={setPersons} persons={persons} person = {person}/>
        )}
      </ul>
      
    </div>
  )
}

export default App