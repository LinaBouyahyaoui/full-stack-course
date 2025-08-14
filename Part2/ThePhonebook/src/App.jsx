import { useState } from 'react'
import Filter from './components/Filter.jsx'  
import Persons from './components/Persons.jsx'
import Personform from './components/Personform.jsx'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const[number, setnumber] = useState('')
  const[filter, setFilter] = useState('')

  const addnewperson =(event)=>{
    event.preventDefault()    
    if(persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }    

    const newObject= {
      name: newName, 
      number: number
    }
    setPersons(persons.concat(newObject))
    setNewName('')
    setnumber('')
    
  }
  const handlenewname =(event)=>{
    setNewName(event.target.value)
  }
  const handlenumber =(event) =>{
    setnumber(event.target.value)
  }
  const handlefilter=(event)=>{
    setFilter(event.target.value)
  } 
  const filteredlist = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  console.log(filteredlist);
  
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlefilter={handlefilter}/>

      <h3>Add a new</h3>
      <Personform addnewperson={addnewperson} newName={newName} handlenewname={handlenewname} number={number}
      handlenumber={handlenumber}/>
      
      <h2>Numbers</h2>
      <ul>
        <Persons persons={filteredlist}/>
      </ul>
    </div>
  )
}

export default App