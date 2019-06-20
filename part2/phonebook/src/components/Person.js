import React from 'react'

const Person = ({id, name, phone}) => {
    return (
    <tr>
    <td>{name}</td>
    <td>{phone}</td>
    </tr>
    )
}

export default Person