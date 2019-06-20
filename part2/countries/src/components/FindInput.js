import React from 'react'

const FindInput = ({value, onChange}) => {

    return (
        <div>
            <h3>Find countries:</h3>
            <input value={value} onChange={onChange} />
        </div>
    )

}

export default FindInput