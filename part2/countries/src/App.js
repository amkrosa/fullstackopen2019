import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Country from './components/Country'
import CountryList from './components/CountryList'
import FindInput from './components/FindInput'



const App = () => {

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, [])

  const handleClick = (country) => {
    setSearch(country.name)
    setCountries([country])
  }

  const handleFindInput = e => {
    setSearch(e.target.value)
    setCountries(data.filter(country => country.name.toLowerCase().includes(search.toLowerCase())))
  }
  if (countries.length===1){
    console.log(countries[0]['capital'])
    return(
      <div>
      <FindInput value={search} onChange={handleFindInput} />
      <Country country={countries[0]} />
      </div>
    )
  }
  else{
  return (
    <div>
      <FindInput value={search} onChange={handleFindInput} />
      <CountryList countries={countries} onClick={handleClick}/>
    </div>
  )
  }
}

export default App;
