
// base position variables

let posTop = 0;
let posLeft = 0;
let score = 0;  // scorecounter

// let duck1 = document.getElementById("duck1");

duck1.style.top = posTop;   // start always at 0
duck1.style.top = posLeft;  // start always at 0
duck2.style.top = posTop;   // start always at 0
duck2.style.top = posLeft;  // start always at 0
duck3.style.top = posTop;   // start always at 0
duck3.style.top = posLeft;  // start always at 0

// removes the no javascript warning message:
document.getElementById('enableJS').style.display='none';

// functions

function randomPosition(callingAnID){
    let insideFunction = document.getElementById(callingAnID);
    insideFunction.style.top = Math.random()*500 + "px";
    insideFunction.style.left = Math.random()*700 + "px";
}

// this is needed because callingAnID will be empty if I call it w/o arguments
setInterval(moveDucks, 1000)
 function moveDucks (){
    randomPosition("duck1");
    randomPosition("duck2");
    randomPosition("duck3");
 }


// Doggo dead function
let dogShot = document.getElementById("dog");
dogShot.addEventListener("click", function (){
    alert("You shot a dog! YOU MONSTER!");
    let dogShotSound = new Audio('./sounds/dog-laughing.mp3');   // I'm in the same folder as index.html
    dogShotSound.play();
    score= score-10000;
    console.log("Score: "+score);
})

// duck makes a sound when shoot
let ducks = document.getElementsByClassName("duckS");   // I have 3 ducks (an array) I need a loop
duckShot.addEventListener("click", function (){
    let duckShotSound = new Audio('./sounds/duck-caught.mp3');
    duckShotSound.play();
    alert("DUCK");
    score= score+500;
    console.log("Times ducks hit: "+score);
})
