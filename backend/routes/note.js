const express= require("express")
const router= express.Router();
const noteController= require("../controllers/note.js");
const warpAsync = require("../utils/warpAsync.js");

router.get("/", noteController.getAllNotes);
router.post("/", warpAsync(noteController.postCreation));
router.put("/:id", warpAsync(noteController.modifyNote));
router.delete("/:id", warpAsync(noteController.deleteNote));


module.exports=router;