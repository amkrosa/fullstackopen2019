import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import PhoneBook from './components/PhoneBook'

const App = () => {
  const [ persons, setPersons] = useState([
    { id: 1,
      name: 'Arto Hellas',
      phone: '123123123' }
  ]) 

  const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) =>{
      setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newObject = {
      id: persons.length+1,
      name: newName,
      phone: newNumber,
    }
    persons.filter(person=>newName.toLowerCase()===person.name.toLowerCase()).length > 0
    ? alert(`${newName} already exists`)
    : setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
      persons={persons}
      addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PhoneBook persons={persons}/>
    </div>
  )
}

export default App
