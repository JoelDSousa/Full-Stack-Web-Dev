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

const StatisticLine = (props) =>{
	
	if(props.text == 'positive'){
	return(
		<table>
			<tbody>
			<tr>
				<td>{props.text} </td>
				<td>{props.value} %</td>
			</tr></tbody>
		</table>
	)}
	else{
		return(<table>
			<tbody><tr>
				<td>{props.text}</td>
				<td>{props.value}</td>
				 
				</tr></tbody>
		</table>)
	}

}

const Statistics = (props) => {
	if(props.total !=0){
	return(
		<div>
			<h1>Statistics</h1>
			<StatisticLine text = 'good' value = {good}/>
			<StatisticLine text = 'neutral' value = {neutral}/>
			<StatisticLine text = 'bad' value = {bad}/>
			<StatisticLine text = 'all' value = {total}/>
			<StatisticLine text = 'average' value = {points/total}/>
			<StatisticLine text = 'positive' value = {good/total}/>
		</div>
	
	)}
}
 const Button = (props) =>{

	switch (props.text) {
		case 'good':
			return(<button onClick={handleGood}>{props.text}</button>)
			break;
		case 'neutral':
			return(<button onClick={handleNeutral}>{props.text}</button>)
		case 'bad':
			return(<button onClick={handleBad}>{props.text}</button>)
		default:
			break;
	}
	

 }
  return (
    <div>
	  <h1>give feedback</h1>

      <Button text = 'good'/>
	  <Button text = 'neutral'/>
	  <Button text = 'bad'/>
	  <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} points = {points}/>
	   
	</div>
	
  )
}

export default App
