const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true})

// new items schema with one field name of type string 

const itemsSchema = {
    name: String
}
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Welcome to To Do List!"
})
const item2 = new Item({
    name: "Hit + to delete"
})

const item3 = new Item({
    name: "You can check to cross off"
})
const defaultItems = [item1, item2, item3]
Item.insertMany(defaultItems), function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Succesfully saved default items to DB")
    }
}
app.get('/', (req,res)=>{
    var today = new Date();
     
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
   
    res.render("list",{
        kindOfDay: day,
        newListItem: items
    });

});
app.post("/", (req,res)=>{
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/")
})
app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})