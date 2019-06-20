import React from 'react'

const Filter = ({newFilter, handleFilterChange}) => {

    return(
        <div>
            <input type='text' value={newFilter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter