import React from 'react';
import ReactDOM from 'react-dom';

const Header = (prop) =>{

    return(
        <>
            <h1>{prop.course}</h1>
        </>
    )
}

const Content = (prop) => {
    return(
        <>
            <Part part={prop.p1} exercises={prop.e1}/>
            <Part part={prop.p2} exercises={prop.e2}/>
            <Part part={prop.p3} exercises={prop.e3}/>
        </>
    )
}

const Part = (prop) => {
    return(
        <>
            <p>
                {prop.part} {prop.exercises}
            </p>
        </>
    )
}

const Total = (prop) => {
    return(
        <>
            <p>
                Number of exercises {prop.sum}
            </p>
        </>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

return(
    <div>
        <Header course={course}/>
        <Content p1={part1} e1={exercises1}
        p2={part2} e2={exercises2}
        p3={part3} e3={exercises3}/>
        <Total sum={exercises1+exercises2+exercises3}/>
    </div>
)
}

ReactDOM.render(<App/>, document.getElementById('root'))

