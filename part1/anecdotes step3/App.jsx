import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   const [votes, setVote] = useState(new Uint8Array(8))

  const [selected, setSelected] = useState(0)


		const handleAnecdote = ()=>{
		if (selected<anecdotes.length-1) {
			setSelected(selected+1)
		}
		else{
			setSelected(0)
		}	
	}
	const handleVote = () =>{
		const copy = [...votes]
		//debugger
		copy[selected]+=1
		setVote(copy)
	}
	const MostVotes =(props) => {

		
		const [index, setIndex] = useState(0)
		
		for(let i = 0; i <props.anecdotes.length; i++){
			if(props.votes[i]>props.votes[index]){
				//debugger
				{setIndex(i)}
					
			} 
		}

		 if (props.votes[index]>0) {
			return(
			
				<div>
					<h1>Anecdote with the most votes</h1>
					  <p>{props.anecdotes[index]}</p>
					  <p>has {props.votes[index]} votes</p>
				</div>
	
			)
		}
		

	}
  return (
    <div>
	  <h1>Anecdote of the day</h1>	
      <p>{anecdotes[selected]}</p>
	  <p>has {votes[selected]} votes</p>


	  <button onClick={handleVote}>vote</button>
	  <button onClick={handleAnecdote}>next anecdote</button>

	  <MostVotes anecdotes = {anecdotes} votes={votes} />
	  

    </div>
  )
}

export default App
