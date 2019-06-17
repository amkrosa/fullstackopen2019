import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
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

    console.log(showAll)
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