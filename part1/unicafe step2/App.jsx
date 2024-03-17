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


  return (
    <div>
	  <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
	  <button onClick={handleNeutral}>neutral</button>
	  <button onClick={handleBad}>bad</button>
	  
	  <h1>statistics</h1>
	  
	  <p>good {good}</p>
	  <p>neutral {neutral}</p>
	  <p>bad {bad}</p>
	  <p>all {total}</p>

	  <p>average {points/total}</p>
	  <p>positive {good/total*100}%</p>
    
	</div>
  )
}

export default App
