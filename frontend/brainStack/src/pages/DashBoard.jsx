import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

export default function DashBoard({notes, deleteNote, startEdit}){
    return(
        <div>
            <h2>All Notes</h2>
            {notes.length===0 && <p>No notes yet</p> }
           {notes.map(note=>(
            <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            startEdit={startEdit}
            />
          ) )}
        </div>
    )
}