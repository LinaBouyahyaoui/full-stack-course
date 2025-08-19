import React from 'react'
import Weather from './Weather'

const Countryinfo = ({c}) => {    
  return (
    <div>
        <h1>{c.name.common}</h1>
        <p>Capital {c.capital}</p>
        <p>Area {c.area}</p>
        <h1>Languages</h1>
        {Object.values(c.languages).map((language) => (
            <li key= {language}>{language}</li>
        ))}
        <img src={c.flags.png} alt={c.name.common} width="30%" height="30%"/>
        <Weather c={c.capital}/>
        
      
    </div>
  )
}

export default Countryinfo
