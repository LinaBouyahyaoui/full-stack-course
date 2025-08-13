import { useState } from 'react'

const Button =(props)=>{
  return(
    <button onClick= {props.onClick}>{props.text}</button>
  )

}
const Mostvotes =({anecdotes, votes}) =>{
    let maxVotes = Math.max(...votes)
    let maxIndex = votes.indexOf(maxVotes)

    if(maxVotes == 0) {
      return <p>No votes yet</p>
    }
    else return (
      <div>
         <p>{anecdotes[maxIndex]}</p>
    <p>has {votes[maxIndex]}</p>

      </div>
   
  )
  }



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
   
  const [selected, setSelected] = useState(0)
  const [votes, setvotes] = useState([0,0,0,0,0,0,0])


  const random = ()=> {
    setSelected(Math.floor(Math.random()*8))
  }

  const change =() =>{
    const copy = [...votes]
    copy[selected] +=1
    setvotes(copy)

  }
  


  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={random} text="next anectode"/>  
      <Button onClick={change} text="vote"/>
      <h1>Anectode with the most votes</h1>
      <Mostvotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App