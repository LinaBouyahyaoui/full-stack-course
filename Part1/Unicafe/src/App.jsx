import { useState } from 'react'


const Display =({text})=> {
  return (
    <h1>{text}</h1>
  )

}
const Button =(props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const Line =(props) =>{
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const average = sum ? (good - bad) / sum : 0;
  const positive = sum ? (good / sum) * 100 : 0;

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{sum}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addgood = ()=> {
    setGood(good+1)
  }
  const addneutral = ()=> {
    setNeutral(neutral+1)
  }
  const addbad = ()=> {
    setBad(bad+1)
  }

  return (
    <div>
      <Display text={"give feedback"}/>
      <Button onClick={addgood} text={"good"}/>
      <Button onClick={addneutral} text={"neutral"}/>
      <Button onClick={addbad} text={"bad"}/>



      {(good || bad || neutral) ? (<Statistics good={good} neutral={neutral} bad={bad}/>) : (<p>No feedback given</p>)}



    </div>
  )
}

export default App