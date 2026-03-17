import { useContext } from "react";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import { NotesContext } from "../contexts/CreateContext";

export default function DashBoard(){
    const {notes}= useContext(NotesContext)
    return(
        <div>
            <h2>DashBoard</h2>
            <NoteForm/>
            {notes.length===0 && <p>No notes yet</p> }
           {notes.map(note=>(
            <NoteCard
            key={note.id}
            note={note}
            />
          ) )}
        </div>
    )
}