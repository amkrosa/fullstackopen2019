import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const rows = () => notesToShow.map(note => 
      <Note 
      key={note.id} 
      note={note}
      />
    )

    const addNote = (event) =>{
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: notes.length+1,
      }
      setNotes(notes.concat(noteObject))
      setNewNote('')
    }

    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important===true)

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }

    useEffect(() => { 
      console.log('effect')    
      axios.get('http://localhost:3001/notes')
        .then(response => { 
          console.log('promise fulfilled')        
          setNotes(response.data) 
        }) 
        }, [])  
    console.log('render', notes.length, 'notes')
  

    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {rows()}
        </ul>
        <form onSubmit={addNote}>        
        <input value={newNote}
        onChange={handleNoteChange}/>        
        <button type="submit">save</button>
        <input type="checkbox" onClick={()=>setShowAll(!showAll)}/>
        </form>
      </div>
    )
  }

  export default App