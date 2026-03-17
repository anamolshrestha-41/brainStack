import { useState } from "react";
import { NotesContext } from "./CreateContext";


export const NotesProvider=({children})=>{
    const [notes, setNotes]=useState([]);
    const [editNote, setEditNote]= useState(null);

    const addNote=(note)=>{
        const newNote={
            id: Date.now(),
            ...note,
            createdAt: new Date().toLocaleDateString()
        };
        setNotes((prev)=>[...prev, newNote]);
    }

    const deleteNote=(id)=>{
        setNotes((prev)=>prev.filter((note)=>note.id !==id))
    };

    const startEdit=(note)=>{
        setEditNote(note);
    }
    const updateNote=(updatedNote)=>{
        setNotes((prev)=>
        prev.map((note)=>
        note.id === updatedNote.id ? updatedNote: note))
            setEditNote(null)
    };

    return(
        <NotesContext.Provider value={{notes, startEdit, addNote, deleteNote, editNote, updateNote}}>{children}</NotesContext.Provider>
    )
}