export default function NoteCard({note, deleteNote, startEdit}){
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