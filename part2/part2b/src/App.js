import React, { useState, useReducer } from 'react'
import PersonForm from './components/PersonForm'
import PhoneBook from './components/PhoneBook'
import Filter from './components/Filter'

const App = () => {

  const [ state, updateState ] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {name: '', number: '', filter: '', persons: []}
  )

  const { name, number, filter, persons } = state

  const addPerson = (event) => {
    event.preventDefault()
    const newObject = {
      id: persons.length+1,
      name: newName,
      phone: newNumber,
    }
    persons.filter(person=>newName.toLowerCase()===person.name.toLowerCase()).length > 0
    ? alert(`${newName} already exists`)
    : updateState({ persons: persons.concat(newObject) })
    updateState({ name: '', number: '' })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilterChange={handleFilterChange}
        newFilter={newFilter}
        persons={persons}
      />
      <h2>Add new</h2>
      <PersonForm
        persons={persons}
        addPerson={addPerson}
        name={name}
        handleNameChange={e => updateState({ name: e.target.value })}
        number={number}
        handleNumberChange={e => updateState({ number: e.target.value })}
      />
      <h2>Numbers</h2>
      <PhoneBook persons={persons}/>
    </div>
  )
}

export default App
