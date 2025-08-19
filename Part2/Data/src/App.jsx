import { useState, useEffect } from "react"
import FormData from "./components/FormData"
import  axios from "axios"
import Countryfilter from "./components/Countryfilter"

const App = () => {
  const [countries, setcountry] = useState([])
  const[filters, setfilter] = useState('')
  
  useEffect (()=> {
    axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response=> setcountry(response.data)) 
  }, [])

  const filteredcountry = (event)=> {    
    setfilter(event.target.value)        
  }

  return (
    <div>
      <div>
      <FormData filters={filters} filteredcountry={filteredcountry}/>
      <Countryfilter filters={filters} countries={countries}/>
      </div>
      
      
    </div>
  )
}

export default App
