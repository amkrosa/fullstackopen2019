import React from 'react'
import Person from './Person'

const PhoneBook = ({persons}) => {
    const rows = () => persons.map(person => 
        <Person key={person.id} name={person.name} phone={person.phone}/>)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </table>
    )
}

export default PhoneBook