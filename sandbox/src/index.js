import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/*1d chapter begin*/
/**/
/*CONDITIONAL RENDERING*/
const History = (props) => {
    if (props.allClicks.length === 0){
        return(
        <div>
            the app is used by pressing the buttons
        </div>
        )
    }
    return (
        <div>
      button press history: {props.allClicks.join(' ')}
    </div>
    )
}

/**/
/*1d chapter end*/
const Hello = ({name,age}) => {
    const bornYear = () => {    
        const yearNow = new Date().getFullYear()    
        return yearNow - age  
    }
    return (
    <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born {bornYear()}</p>    
    </div>
    )
  }

  const Counter = ({counter}) =>{
    return(
        <div>
            {counter}
        </div>
    )
  }

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
  )

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
            <Part name={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
            <Part name={prop.parts[1].name} exercises={prop.parts[1].exercises}/>
            <Part name={prop.parts[2].name} exercises={prop.parts[2].exercises}/>
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

const Total = (prop) => {
    return(
        <>
            <p>
                Number of exercises {prop.parts[0].exercises+
                prop.parts[1].exercises+prop.parts[2].exercises}
            </p>
        </>
    )
}

const App = () => {

    const text=`<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>\n\n<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>\n\n<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>\n\n<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>\n\n<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>`
    const [ counter, setCounter ] = useState(0)
    const [clicks, setClicks] = useState({
        left: 0, right: 0
      })
    const [allClicks, setAll] = useState([])
    const handleLeftClick = () => {
        setClicks({ ...clicks, left: clicks.left + 1 })
        setAll(allClicks.concat('L'))
    }
    const handleRightClick = () => {
        setClicks({ ...clicks, right: clicks.right + 1 })
        setAll(allClicks.concat('R'))
    }

    const setValue = (value) => () => setCounter(value)
    const course = {
    name: 'Half Stack application development',
    parts: [{
        name:'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }]
}

return(
    <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        <Hello name="Ania Krasowska" age="23"/>
        <Counter counter={counter}/> 
        <Button handleClick={setValue(counter+1)} text="+"/>
        <Button handleClick={setValue(counter-1)} text="-"/>
        <Button handleClick={setValue(0)} text="reset"/>
        <div>1d</div>
        <div>{clicks.left}
        <Button handleClick={handleLeftClick} text="left"/>
        <Button handleClick={handleRightClick} text="right"/>
        {clicks.right}
        <History allClicks={allClicks}/>
        </div>
    </div>
)
}

ReactDOM.render(<App/>, document.getElementById('root'))
