const Header = ({name}) =>{
    return(
        <h2>{name}</h2>
    )
}
const Coursename =({parts}) => {
    return(
        <ul>
            {parts.map(({name, exercises, id})=>  
                <li key= {id}>{name} {exercises}</li>
            )}
        </ul>
    )
}
const Total = ({parts}) => {
    const t = parts.reduce((sum, part)=>sum + part.exercises, 0)
    return(
        <h3>Total of {t} exercises</h3>
        )
}

const Course = ({course}) => {
    
  return (
    <div>
        <Header name={course.name}/>
        <Coursename parts={course.parts} />
        <Total parts={course.parts}/>
        
      
    </div>
  )
}

export default Course
