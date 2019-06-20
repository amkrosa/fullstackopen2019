import React from 'react'

const Course = ({course}) => {

    return(
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = ({name}) =>{

    return(
        <>
            <h1>{name}</h1>
        </>
    )
}

const Content = ({ parts }) => {
    const generate = () => parts.map(part=>
        <Part id={part.id} name={part.name} exercises={part.exercises}/>
        )

    return(
        <>
            {generate()}
        </>
    )
}

const Part = (prop) => {
    return(
        <>
            <p>
                {prop.name} {prop.exercises}
            </p>
        </>
    )
}

const Total = ({parts}) => {

    const calculate = () => parts.reduce((acc, val)=>acc+val.exercises,0)

    return(
        <>
            <p>
                total number of exercises <b>{calculate()}</b>
            </p>
        </>
    )
}

export default Course