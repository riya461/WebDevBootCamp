const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require('https');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req,res) =>{

    res.sendFile(__dirname+"/signup.html")
})
app.post("/", (req,res) =>{
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;
    // d93138c1382eebfca01d25fe36ae6170-us8
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }

            }
        ]
    };
    const jSonData = JSON.stringify(data);
    const url ="https://usX.api.mailchimp.com/3.0/lists/listid"
    const options = {
        method:"POST",
        auth:"d93138c1382eebfca01d25fe36ae6170-us8"

    }
    const request = https.request(url,options,function(response){
        if(response.statusCode === 200){
    res.sendFile(__dirname+"/success.html")

        }else{
    res.sendFile(__dirname+"/failure.html")

        }
        response.on("data",function(data){

        })
    })
    request.write(jSonData)
})

app.post('/failure', (req,res)=>{
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})