
// base position variables

let posTop = 0;
let posLeft = 0;

// let duck1 = document.getElementById("duck1");

duck1.style.top = posTop;   // start always at 0
duck1.style.top = posLeft;  // start always at 0
duck2.style.top = posTop;   // start always at 0
duck2.style.top = posLeft;  // start always at 0
duck3.style.top = posTop;   // start always at 0
duck3.style.top = posLeft;  // start always at 0



// functions

function randomPosition(callingAnID){
    let insideFunction = document.getElementById(callingAnID);
    insideFunction.style.top = Math.random()*500 + "px";
    insideFunction.style.left = Math.random()*700 + "px";
}

// this is needed because callingAnID will be empty if I call it w/o arguments
setInterval(moveDucks, 500)
 function moveDucks (){
    randomPosition("duck1");
    randomPosition("duck2");
    randomPosition("duck3");
 }

