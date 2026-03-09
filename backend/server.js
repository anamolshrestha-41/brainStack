const app= require("./index");
const mongoose= require("mongoose")
main()
.then(() => {
    console.log("MongoDB Connected Successfully...");
})
.catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
    console.log("App will continue without database connection");
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/brainStack");
}

app.listen(3000, ()=>{
    console.log("Server Started at port 3000.")
})