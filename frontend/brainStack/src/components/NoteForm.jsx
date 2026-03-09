import { useEffect } from "react";
import { useState } from "react";

export default function NoteForm({addNote, editNote, updateNote}){
    const[note, setNote] = useState({
        title: '',
        content: '',
    }) 
    const [error, setError]= useState('');

    useEffect(()=>{
        if(editNote){
            setNote(editNote)
        }
    }, [editNote]);


    const handleChange=(e)=>{
        const {name, value} = e.target;
        setNote(prev=>({...prev, [name]: value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!note.title || !note.content){
            setError("Missing fields.")
            return
        }
        setError('')
        if(editNote){
            updateNote(note);
        }else{
            addNote(note)
        } 
        setNote({title:'', content:''})
        console.log({...note});
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <textarea name="title"
            value={note.title}
            onChange={handleChange} />
              <label>Content</label>
            <textarea name="content"
            value={note.content}
            onChange={handleChange} />
            <button type="submit">{editNote? "Update":"Add"}</button>
            {error && <p>{error}</p> }
        </form>
    )
}