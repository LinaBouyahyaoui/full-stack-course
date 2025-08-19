import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.jsx'  
import Persons from './components/Persons.jsx'
import Personform from './components/Personform.jsx'
import Personservice from './services/Personservice.js'
import Notification from './components/Notification.jsx'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const[newNumber, setnumber] = useState('')
  const[filter, setFilter] = useState('')
  const[notification, setNotification] = useState(null)

  useEffect (()=> {
    Personservice
    .getAll()
    .then(initialpersons => {
      setPersons(initialpersons)
    }
    )
  }, [])

    

  const addnewperson =(event)=>{
    event.preventDefault()  
    const newObject= {
      name: newName, 
      number: newNumber
    }  
    if(persons.some(person => person.name === newName)) {
      const person_change = persons.find(person => person.name.toLowerCase() === newName.toLocaleLowerCase())
      const confirm_update = window.confirm(`${newName} is already added to phonebook, do you want to replace the old number with the new one ?`)
      console.log(confirm_update);

      
      
      if(confirm_update){
        const personUpdate = { ...person_change, number: newNumber }
        if(personUpdate.number == person_change.number){
          alert("This user is already in the checkbook with this number")
        }
        
        Personservice
        .update(personUpdate.id, personUpdate)
        .then(returnedpersons=> {
          console.log(returnedpersons);
          
          setPersons(persons.map(person => person.id != personUpdate.id ? person : returnedpersons))
          
        }
      )
        .catch(error => {
          setPersons(persons.filter(person => person.name !== personUpdate.name))
          setNotification(`${newName} was already deleted`)
          setTimeout(()=> {
            setNotification(null)
          }, 5000)
    }
        
      )
      setNotification(`${newName}'s new number was successfuly updated`)
      setTimeout(()=>{
        setNotification(null)
      }, 5000
      )
        
      }
    }    
    else {
      Personservice
    .create(newObject)
    .then(returnedpersons=> {       
      setPersons(persons.concat(returnedpersons)),
      setNewName(''),
      setnumber('')
    })
    setNotification(`${newName} was successfuly added`)
    setTimeout(()=> {
      setNotification(null)
    }, 5000)

  } 

    }

  const deleteperson =(id)=>{
    const person = persons.find(person => person.id === id)
    const confirm = window.confirm(`Are u sure you want to delete ${person.name}`)
    if (confirm){
      Personservice
    .supprime(id)
    .then(returnedpersons=> {       
      persons.map(person=> person.id != id ? person : returnedpersons)
      setPersons(persons.filter(person => person.id != id))

    })
    }
    

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
  
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlefilter={handlefilter}/>

      <h3>Add a new</h3>
      <Personform addnewperson={addnewperson} newName={newName} handlenewname={handlenewname} number={newNumber}
      handlenumber={handlenumber}/>
      <Notification message ={notification}/> 
      
      <h2>Numbers</h2>
      <ul>
        <Persons persons={filteredlist} deleteperson={deleteperson}/>
        
      </ul>
    </div>
  )
}

export default App