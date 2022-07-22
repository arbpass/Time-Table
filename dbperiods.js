//connect with DB
const mongoose= require("mongoose");
const DB= "mongodb+srv://arb:arbmongo@cluster0.smtw9.mongodb.net/time-table?retryWrites=true&w=majority";
// const DB= "'mongodb://localhost:27017/scheduleApp'";

mongoose.connect(DB, {
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
