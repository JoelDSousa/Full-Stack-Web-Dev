
const Course = ({course}) =>{
    const parts = course.parts;
    let total = 0;
    for(let i=0;i<parts.length;i++){
        total+=parts[i].exercises
        
    }
    
    return(
        <div>
            <h1>{course.name}</h1>
            {parts.map(part => 
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>)}              
            <b>total of {total} exercises </b>
        </div>
        
    )
}


export default Course
