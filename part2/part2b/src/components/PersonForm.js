import React from 'react'

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
    
    return(
    <div>
        <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          phone: <input type='number' value={newNumber} onChange={handleNumberChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
    )
}

export default PersonForm