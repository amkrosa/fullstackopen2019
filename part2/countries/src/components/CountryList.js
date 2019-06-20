import React from 'react'
import Country from './Country'

const CountryList = ({countries, onClick}) => {
    
    const rows = () => countries.map(country=>     
            <li key={country.numericCode}>
            {country.name}
            <button onClick={()=>onClick(country)}>show</button>
            </li> 
    )
    

    return (
        <div>
            <h3>Countries list: </h3>
                {rows().length>10 ? 'There are too many countries' : <ul>{rows()}</ul>}
        </div>
    )
}

export default CountryList