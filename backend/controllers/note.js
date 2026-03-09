const Note = require("../models/note")
// exports.noteCreationForm=(req, res)=>{
// }

exports.postCreation = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({
            title,
            content
        })
        await note.save();
        res.status(201).json(note);
    }
    catch (error) {
        console.log(error)
    }

}

exports.getAllNotes = async (req, res) => {
    try{
          const notes = await Note.find({})
    res.status(200).json(notes);
    }catch(error){
        console.error("error", error)
    }
  
}

exports.modifyNote = async (req, res) => {
    try{
            const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body);
    res.status(200).json({
        "message": "Successfully modified...", note
    })
    }catch(error){
        console.error("error", error)
    }
}

exports.deleteNote = async (req, res) => {
    try{
            const { id } = req.params;
    await Note.findByIdAndRemove(id);
    res.status(200).json({
        "message": "deleted successfully",
    });
    }catch(error){
        console.error("error", error)
    }

}
