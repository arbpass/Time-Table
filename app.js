const express= require("express");
const app= express();
const fs= require("fs");
const bp = require('body-parser'); //for req.body.name
const Edited= require("./dbperiods"); //include schema from db
const PORT= process.env.port || 3000;

//template engine setup
app.use(express.static("public"));
app.set("view engine", "hbs");

//body parser
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


//reading our API (json file)
fs.readFile(`${__dirname}/public/schedule.json`, "utf-8", (err, data)=>{
    let obj= JSON.parse(data); //convert schedule.json to array of object
    let day= new Date().getDay(); //returns day in no. that helps to extract data from specific index from object
    for(let i=0; i<7; i++)
    {
        if(day == i) //if i=6 then day=6 means its Saturday
        {
            var today= obj[i]; //returns the schedule of current day
            break;
        }
    }  
    
    //endpoint START
    app.get("/start", (req, res)=> {
        res.render("start");
    })

    //endpoint LOGIN
    app.get("/login", (req,res)=>{
        res.render("login");
    });
    app.post("/login", (req,res)=> {
        const regno= req.body.regno;
        const pass= req.body.password;
        if(regno== "trial" && pass== "lofi123")
            res.render("loggedin");
    });

    //endpoint STUDENTS (endpoints should be inside fs.readfile becuz its giving schedule as object named 'today')
    app.get("/students", (req, res)=> {
        res.render("students",{
            period1: today.pr1,
            period2: today.pr2,
            period3: today.pr3,
            break: today.br,
            period4: today.pr4,
            period5: today.pr5,
            period6: today.pr6,
        });
    });

    //endpoint FACULTY (EDIT option works)
    app.post("/", (req, res)=>{

        res.render("index", { //serve the hbs page
            period1: today.pr1,
            period2: today.pr2,
            period3: today.pr3,
            break: today.br,
            period4: today.pr4,
            period5: today.pr5,
            period6: today.pr6,
        });
    });

    app.post("/saveEdit", (req, res)=>{
        const code= req.body.typecode; //return text typed in 1st input 
        const newpr= req.body.newpr; //2nd input
        today[code]= newpr;
        
        const editedSchedule= new Edited({ //store all edited schedules in database
            date: new Date(),
            period1: today.pr1,
            period2: today.pr2,
            period3: today.pr3,
            break: today.br,
            period4: today.pr4,
            period5: today.pr5,
            period6: today.pr6,
        });
        editedSchedule.save();
        res.render("successPage");
    });

});


//endpoint (SCHEDULE works & ACADEMIC CALENDAR works)
app.get("/defaultSchedule",(req, res)=>{
    res.render("defaultSchedule");
});
app.get("/calendar", (req, res)=> {
    res.render("calendar");
})

app.get("/", (req, res)=> {
    res.send("hey");
})

app.listen(PORT);