import { useContext } from "react"
import { NotesContext } from "../contexts/CreateContext"

export default function NoteCard({note}){
    const{deleteNote, startEdit} = useContext(NotesContext)
    return(
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>{note.createdAt}</small>
            <div>
                <button onClick={()=>startEdit(note)}>Edit</button>
                <button onClick={()=>deleteNote(note.id)}>Delete</button>
            </div>
        </div>
    )
}