
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
    insideFunction.style.top = Math.random()*450 + "px";    // adjustment needed
    insideFunction.style.left = Math.random()*700 + "px";
}

// this is needed because callingAnID will be empty if I call it w/o arguments
setInterval(moveDucks, 1000)        // set to 10 to quickly spot if the duck is going out of a zone ; normally 1000ms   ; other test value is "10k ms"
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
    updateScore();  // updates the scoreboard
})

// duck makes a sound when shoot
/* let ducks = document.getElementsByClassName("duckS");   // I have 3 ducks (an array) I need a loop
duckShot.addEventListener("click", function (){
    let duckShotSound = new Audio('./sounds/duck-caught.mp3');
    duckShotSound.play();
    alert("DUCK");
    score= score+500;
    console.log("Times ducks hit: "+score);
})
 */


// add an event listener for each element in the class duckS
let ducks = document.getElementsByClassName("duckS");
for (let i = 0; i < ducks.length; i++) {
  ducks[i].addEventListener("click", duckShot);
}

// duck shoot function
function duckShot() {
    let duckShotSound = new Audio('./sounds/duck-caught.mp3');
    duckShotSound.play();
    // alert("QUACK!"); // this will become annoying
    score= score+500;
    console.log("Times ducks hit: "+score);
    updateScore();  // updates the scoreboard
  }

// displaying score in html and setting it to 0 at the beginning
let scoreBox = document.getElementById("scoreBox");
scoreBox.innerHTML= "<span>SCORE<br />" + score + "</span>";

// updates the score
function updateScore() {
    scoreBox.innerHTML = "<span>SCORE<br />" + score + "</span>";
}

// displaying hit in html
let targetsHitBox = document.getElementById("targetsHitBox");
targetsHitBox.innerHTML= "<span>HIT<br /></span>";

// displaying shot in html
let bulletsBox = document.getElementById("bulletsBox");
bulletsBox.innerHTML= "<span>SHOT<br /></span>";

