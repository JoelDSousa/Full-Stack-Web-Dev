import { useState } from 'react';


const Filter = ({updatePersons, persons}) =>{

    const [newFilter, setNewFilter] = useState('')
   
    const changedPersons = [...persons] 
    /*Must assign like this to let React know a new and different object was created
    Otherwise, if variable was assigned like so :
    const changedPersons = persons;
    React would not re render page as it deemed it unnecessary. 
    Using only the '=' sign means that a reference is being passed.
    It's not considered a new one, and the web app is not rendered.
    because it interprets it as the sam object with a new name 
    */

    const handleNewFilter= (event)=>{
      event.preventDefault()
      console.log(event.target.value);
      setNewFilter(event.target.value);
      console.log('Start of Persons:');
      console.log(persons);
    

      for (let i = 0; i < changedPersons.length; i++) {
        if(event.target.value == ""){
            changedPersons[i].show = true;
        }  
        let result = changedPersons[i].name
        .toLowerCase()
        .match(event.target.value
            .toLowerCase());


        if (result===null) {
            changedPersons[i].show = false; 
        }  
      }
      console.log('End of persons:');
      console.log(changedPersons);
      updatePersons(changedPersons);
     
    }
    
    return(<div>
    filter shown with:  
    <input name='filter' value={newFilter} onChange={handleNewFilter} />
</div>)
}

export default Filter