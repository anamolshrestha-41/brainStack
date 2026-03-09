
import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import DashBoard from './pages/DashBoard'

function App() {
const [notes, setNotes]=useState([]);
const [editNote, setEditNote]= useState(null);

const addNote=(note)=>{
  const newNote={
    id: Date.now(),
    ...note,
    createdAt: new Date().toLocaleDateString()
  }
  setNotes(prev=>[...prev, newNote])
}
const deleteNote=(id)=>{
  setNotes(prev=> prev.filter(note=>note.id !==id));
}

const startEdit=(note)=>{
  setEditNote(note)
}

const updateNote=(updatedNote)=>{
  setNotes(prev=>
    prev.map(note=> note.id === updatedNote.id ? updateNote : note)
  );
  setEditNote(null)
}

  return (
    <>
    <h1>NoteApp</h1>
    <NoteForm
    addNote={addNote}
    editNote={editNote}
    updateNote={updateNote}/>
    <DashBoard
    notes={notes}
    deleteNote={deleteNote}
    startEdit={startEdit}/>
    </>
  )
}

export default App
