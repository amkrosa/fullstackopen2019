import React, { useState, useReducer, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PhoneBook from './components/PhoneBook'
import Filter from './components/Filter'
import PersonField from './components/PersonField'
import axios from 'axios'

const App = () => {

  const [ state, updateState ] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {name: '', number: '', filter: '', persons: [], filteredPersons: []}
  )

  const { name, number, filter, persons, filteredPersons } = state

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        updateState( { persons: response.data } )
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const newObject = {
      id: persons.length+1,
      name: name,
      phone: number,
    }
    persons.filter(person=>name.toLowerCase()===person.name.toLowerCase()).length > 0
    ? alert(`${name} already exists`)
    : updateState({ persons: persons.concat(newObject) })
    updateState({ name: '', number: '' })
  }

  const handleFilterChange = e => {
    updateState({
      filter: e.target.value, 
      filteredPersons: persons.filter(person=>
        person.name.toLowerCase().includes(filter.toLowerCase())
        )
      }
    )
  }


  console.log(`filtered persons: ${filteredPersons}, filter: ${filter}`);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilterChange={handleFilterChange}
        newFilter={filter}/>
      <h2>Add new</h2>
      <PersonForm addPerson={addPerson}>
        <PersonField name='name' value={name} onChange={e => updateState({ name: e.target.value })}/>
        <PersonField name='phone' value={number} onChange={e => updateState({ number: e.target.value })}/>
      </PersonForm>
        
      <h2>Numbers</h2>
      <PhoneBook persons={filter==='' ? persons : filteredPersons}/>
    </div>
  )
}

export default App
