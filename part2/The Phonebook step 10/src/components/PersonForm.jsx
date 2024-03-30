import { useState } from 'react'
import axios from 'axios';
import personsService from '../services/persons.js'

const PersonForm = ({persons, setPersons}) =>{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const addName = (event)=>{
        event.preventDefault();
        const newPerson ={
          name:newName,
          number:newNumber,
          show: true
          
        };
        for(let i=0; i<persons.length;i++){
          if(persons[i].number===newPerson.number){
            const message = newPerson.number +' is already added to phonebook';
            console.log(message);
            alert(message)
            return;
          }else if(persons[i].name===newPerson.name){
              let copyPersons = [...persons];
              copyPersons[i].number=newNumber;
              console.log('copyPersons');
              console.log(copyPersons);
              personsService
              .update(persons[i].id,newPerson)
              .then(returnedPerson=>{
                setPersons(copyPersons);
                setNewName('');
                setNewNumber('');
                alert(`Updated ${returnedPerson.name}'s number`)

              })
   
              return;  
          } 
        }
        personsService
        .create(newPerson)
        .then(returnedPerson=>{
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
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