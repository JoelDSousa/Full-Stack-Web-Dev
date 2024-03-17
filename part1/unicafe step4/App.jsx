import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)
 
  const  handleGood = () =>{
	
	const updateGood = good + 1
	const updatedPoints = points + 1
	setPoints(updatedPoints)
	setGood(updateGood)
	const updatedTotal = total+1
	setTotal(updatedTotal)


}

const  handleNeutral = () =>{
const updateNeutral = neutral + 1
  setNeutral(updateNeutral)
const updatedTotal = total+1
setTotal(updatedTotal)

}

const  handleBad = () => {
const updateBad = bad + 1
  setBad(updateBad)
const updatedPoints = points - 1
setPoints(updatedPoints)
const updatedTotal = total+1
setTotal(updatedTotal)

}


const Statistics = (props) => {
	if(props.total !=0){
	return(
		<div>
			<h1>Statistics</h1>
			<p>good {props.good}</p>
			<p>neutral {props.neutral}</p>
			<p>bad {props.bad}</p>
			<p>all {props.total}</p>
			<p>average {props.points/props.total}</p>
			<p>positive {props.good/props.total*100}%</p>
		</div>
	
	)}
}




  return (
    <div>
	  <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
	  <button onClick={handleNeutral}>neutral</button>
	  <button onClick={handleBad}>bad</button> 
	  <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} points = {points}/>
	   
	</div>
	
  )
}

export default App
