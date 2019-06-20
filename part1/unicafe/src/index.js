import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.plain[0].good === 0 &&
    props.plain[1].neutral === 0 &&
    props.plain[2].bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text='good' value={props.plain[0].good} />
        <Statistic text='neutral' value={props.plain[1].neutral} />
        <Statistic text='bad' value={props.plain[2].bad} />
        <Statistic text='all' value={props.func[0].all} />
        <Statistic text='average' value={props.func[1].average} />
        <Statistic text='positive' value={props.func[2].positive} />
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = () => {
    return good + bad + neutral
  }
  const average = () => {
    return (good - bad) / all()
  }
  const positive = () => {
    return (good / all()) * 100 + '%'
  }
  const setValue = (value, func) => () => func(value)

  const plainStatistics = [
    {
      good: good
    },
    {
      neutral: neutral
    },
    {
      bad: bad
    }
  ]
  const funcStatistics = [
    {
      all: all()
    },
    {
      average: average()
    },
    {
      positive: positive()
    }
  ]

  return (
    <div>
      <Header text='Give feedback' />
      <Button handleClick={setValue(good + 1, setGood)} text='good' />
      <Button handleClick={setValue(neutral + 1, setNeutral)} text='neutral' />
      <Button handleClick={setValue(bad + 1, setBad)} text='bad' />
      <Header text='Statistics' />
      <Statistics func={funcStatistics} plain={plainStatistics} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
