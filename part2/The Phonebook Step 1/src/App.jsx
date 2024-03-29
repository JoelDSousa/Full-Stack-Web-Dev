import { useState } from 'react'
import Note from './components/Note.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id:1 }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event)=>{
    event.preventDefault();
    const newPerson ={
      name:newName,
      id: persons.length+1
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
    console.log('button clicked', event.target);
  }

  const handleNewName = (event)=>{
  console.log(event.target.value);
  setNewName(event.target.value);

}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit"  >add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <ul>
        {persons.map(
          person =>
          <Note key={person.id} note = {person}/>
        )}
      </ul>
      
    </div>
  )
}

export default App