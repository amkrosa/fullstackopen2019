import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {

    const name = country['name']
    const capital = country['capital']
    const population = country['population']
    const languages = country['languages']
    const flag = country['flag']

    const rows = () => languages.map((language)=><li key={language.iso639_2}>{language.name}</li>)
        return(
            <div>
                <h1>{name}</h1>
                    <div>Capital - {capital}</div>
                    <div>Population - {population}</div>
                <h3>Languages</h3>
                    <ul>
                        {rows()}
                    </ul>
                <div>
                    <img src={flag} alt='flag' height='250' width='400'/>
                </div>
                <Weather capital={capital}/>
            </div>
        )
    

}

export default Country