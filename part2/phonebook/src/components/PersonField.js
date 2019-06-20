import React from 'react'

const PersonField = ({name, value, onChange}) => {

    return(
        <div>
        <h3>{name}</h3>
        <input type='text' value={value} onChange={onChange} required/>
        </div>
    )
}

export default PersonField