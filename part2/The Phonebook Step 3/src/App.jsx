import { useState } from 'react'
import Note from './components/Note.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '228 796 543',
      id:1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event)=>{
    event.preventDefault();
    const newPerson ={
      name:newName,
      number:newNumber,
      id: persons.length+1
    };
    for(let i=0; i<persons.length;i++){
      if(persons[i].name===newPerson.name){
        const message = newPerson.name +' is already added to phonebook';
        console.log(message);
        alert(message)
        return;
      }else if(persons[i].name===newPerson.number){
        const message = newPerson.number +' is already added to phonebook';
        console.log(message);
        alert(message)
        return;
      }
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
    console.log('button clicked', event.target);
  }

  const handleNewName = (event)=>{
  console.log(event.target.value);
  setNewName(event.target.value);

}

const handleNewNumber=(event)=>{
  console.log(event.target.value);
  setNewNumber(event.target.value);
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
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