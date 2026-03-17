import { useContext, useEffect } from "react";
import { useState } from "react";
import { NotesContext } from "../contexts/CreateContext";

export default function NoteForm(){
  const {addNote, editNote, updateNote}= useContext(NotesContext)
  const [formData, setFormData]= useState({
    title: '',
    content: ''
  })
  const[error, setError]=useState('')
    useEffect(()=>{
        if(editNote){
            setFormData(editNote)
        }
    }, [editNote]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.title || !formData.content){
            setError("Missing fields.")
            return
        }
        setError('')
        if(editNote){
            updateNote(formData);
        }else{
            addNote(formData)
        } 
        setFormData({title:'', content:''})
        console.log({...formData});
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <textarea name="title"
            value={formData.title}
           onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        } />
              <label>Content</label>
            <textarea name="content"
            value={formData.content}
        onChange={(e) =>
          setFormData({ ...formData, content: e.target.value })
        } />
            <button type="submit">{editNote? "Update":"Add"}</button>
            {error && <p>{error}</p> }
        </form>
    )
}