import { useState } from 'react';


const Filter = ({newFilter, handleNewFilter}) =>{






    
    return(<div>
    filter shown with:  
    <input name='filter' value={newFilter} onChange={handleNewFilter} />
</div>)
}

export default Filter