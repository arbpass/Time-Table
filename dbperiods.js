//connect with DB
const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/scheduleApp', {
    useNewUrlParser: true}).then(()=>{
        console.log("successfull");
});

const periodSchema= new mongoose.Schema({
    date:{
        type: Date,
    },
    period1:{
        type: String,
    },
    period2:{
        type: String,
    },
    period3:{
        type: String,
    },
    break:{
        type: String,
    },
    period4:{
        type: String,
    },
    period5:{
        type: String,
    },
    period6:{
        type: String,
    },
});

const Edited= new mongoose.model("editedPeriods", periodSchema);

module.exports= Edited;
