import React from 'react'

const PersonForm = (props) => {
    
    return(
    <div>
        <form onSubmit={props.addPerson}>
          {props.children}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
    )
}

export default PersonForm