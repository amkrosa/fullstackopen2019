import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const Anecdote = ({text}) => {
    return (
        <div>{text}</div>
    )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const setValue = (value, func) => () => func(value)
  const randomNumber = (previous) => {
    let random = Math.floor(Math.random() * 6)
    return (random===previous ? randomNumber(random) : random)
  }
  console.log(randomNumber(selected))
  return (
    <div>
        <Anecdote text={props.anecdotes[selected]}/>
        <Button handleClick={setValue(randomNumber(selected), setSelected)} text='other anecdote'/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)