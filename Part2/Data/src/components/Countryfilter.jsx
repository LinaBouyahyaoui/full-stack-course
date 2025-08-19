import React from 'react'
import Countryinfo from './Countryinfo'
import {useState, useEffect} from "react"

const Countryfilter = ({filters, countries}) => {
    const [selectedcountry, setselectedcountry] = useState(null)
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(filters.toLowerCase())) 
    useEffect(() => {
    setselectedcountry(null); // reset whenever filtered list updates
  }, [filters]); 
    
    if(filtered.length >10){
        return 'Too many matches, be more specific'
    }
    if(filtered.length == 1){
        const c = filtered[0]
        return(
            <div>
                <Countryinfo c={c}/>
            </div>
        )
    }    
    if(filtered.length == 0){
        return ' No matche found !'
    }
    const handlecountries =(c) => {
        setselectedcountry(c)
    }
    
    
  return (
    <div>
        <ul>
            {filtered.map(country=>(
                <li key={country.cca3}> {country.name.common}
                <button onClick={() => handlecountries(country)}>show</button>    
            </li>
            )
                        )}
        </ul>
        {selectedcountry && <Countryinfo c={selectedcountry}/>}
        
      
    </div>
  )
}

export default Countryfilter
