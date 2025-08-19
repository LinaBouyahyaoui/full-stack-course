const Persons = ({persons, deleteperson}) => {
  
  return (
    <div>
         {persons.map((person)=> (
          <li key={person.name}>{person.name} {person.number} 
          <button onClick= {() => deleteperson(person.id)}> delete </button>
          </li>      

        ))}
      
    </div>
  )
}

export default Persons
