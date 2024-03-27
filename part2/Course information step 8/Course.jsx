
const Course = ({course}) =>{
    const parts = course.parts;
    const initialValue = 0
    const total = parts.reduce(
            (accumulator, currentValue) => accumulator+currentValue.exercises,
            initialValue,

            )

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
