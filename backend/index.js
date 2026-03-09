const express= require("express");
const app= express();
const Note = require("./routes/note");

app.use(express.json());

app.use("/api/notes", Note)

module.exports= app;