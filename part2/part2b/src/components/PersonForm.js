import React from 'react'

const PersonForm = ({addPerson, name, handleNameChange, number, handleNumberChange}) => {
    
    return(
    <div>
        <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={name} onChange={handleNameChange} required/>
        </div>
        <div>
          phone: <input type='number' value={number} onChange={handleNumberChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
    )
}

export default PersonForm