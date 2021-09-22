//date in the header
let date= document.getElementsByClassName("date")[0];
let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September"];
let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDate= new Date().getDate().toString();
let currentDay= new Date().getDay();
let currentMonth= new Date().getMonth();
let currentYear= new Date().getFullYear().toString();
date.innerText= currentDate +" - "+ months[currentMonth] +" - "+ currentYear +"\n\n"+ days[currentDay];

//pop-up options for periods
let periods= document.getElementsByClassName("btn");
let options= document.getElementsByClassName("options")[0];
let code= document.getElementById("code");
let box= document.getElementById("confirm-box");

Array.from(periods).forEach((ele)=> {
    ele.addEventListener("click", (e)=> {    
        options.style.visibility= "initial"; //show sidebar when clicked on periods
        code.innerText= "Code: " + ele.id;

        //edit option works
        let edit= document.getElementById("edit");
        edit.addEventListener("click", ()=> {
            box.style.visibility= "initial";
    
        }, {once:true}); //delete should work only once
    }, {once:true}); //period should get clicked only once
});

//cross sign works
let cancel= document.getElementById("cancel");
cancel.addEventListener("click", ()=>{ //when cross button is clicked hide sidebar again
    options.style.visibility= "hidden";
    location.reload(); //after hide it, reload the page
});

let cancel2= document.getElementById("cancel2");
cancel2.addEventListener("click", ()=>{ //when cross button is clicked hide sidebar again
    box.style.visibility= "hidden";
    location.reload(); //after hide it, reload the page
});


