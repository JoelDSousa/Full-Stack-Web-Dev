const Header = (props) =>{
	return(<div>
		<h1>{props.course}</h1>
	</div>)
}

const Part = (props)=>{
	return(
		<div>
			<p> {props.part} {props.exercises} </p>


		</div>
	)
}
const Content = (props) =>{
	return(<div>
		<Part part = {props.part1.name} exercises = {props.part1.exercises}/>
		<Part part = {props.part2.name} exercises = {props.part2.exercises}/>
		<Part part = {props.part3.name} exercises = {props.part3.exercises}/>
	</div>)
}
const Total = (props) =>{
	return(
		<div>
			<p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
		</div>
	)

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
	console.log(parts)
	return (
	  <div>
   	<Header course={course} />
		<Content part1 = {parts[0]} part2 = {parts[1]} part3 = {parts[2]}   />
		<Total part1={parts[0]} part2 = {parts[1]} part3  = {parts[2]}/>
	  </div>
	)
  }
  
  export default App
