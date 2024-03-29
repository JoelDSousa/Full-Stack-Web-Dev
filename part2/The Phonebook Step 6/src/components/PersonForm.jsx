import { useState } from 'react'

const PersonForm = ({persons, setPersons}) =>{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const addName = (event)=>{
        event.preventDefault();
        const newPerson ={
          name:newName,
          number:newNumber,
          show: true,
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
       
        setNewName(event.target.value);
      }


    const handleNewNumber=(event)=>{
      
      setNewNumber(event.target.value);
    }

    return(
        <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit"  >add</button>
        </div>
      </form>
      
   
        
    )
}


export default PersonForm