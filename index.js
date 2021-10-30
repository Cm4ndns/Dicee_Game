var num1 = Math.random() * 6;
var x1 = Math.ceil(num1);

var num2 = Math.random() * 6;
var x2 = Math.ceil(num2);

// Player1 Roll
if(x1 === 1) {
    document.getElementById("dice1").src = "dicee_images/dice1.png";
}
else if(x1 === 2) {
    document.getElementById("dice1").src = "dicee_images/dice2.png";
}
else if(x1 === 3) {
    document.getElementById("dice1").src = "dicee_images/dice3.png";
}
else if(x1 === 4) {
    document.getElementById("dice1").src = "dicee_images/dice4.png";
}
else if(x1 === 5) {
    document.getElementById("dice1").src = "dicee_images/dice5.png";
}
else if(x1 === 6) {
    document.getElementById("dice1").src = "dicee_images/dice6.png";
}

// Player2 Roll
if(x2 === 1) {
    document.getElementById("dice2").src = "dicee_images/dice1.png";
}
else if(x2 === 2) {
    document.getElementById("dice2").src = "dicee_images/dice2.png";
}
else if(x2 === 3) {
    document.getElementById("dice2").src = "dicee_images/dice3.png";
}
else if(x2 === 4) {
    document.getElementById("dice2").src = "dicee_images/dice4.png";
}
else if(x2 === 5) {
    document.getElementById("dice2").src = "dicee_images/dice5.png";
}
else if(x2 === 6) {
    document.getElementById("dice2").src = "dicee_images/dice6.png";
}

// Decide Winner
if(x1 > x2) {
    document.querySelector("#heading").innerHTML = "🚩Player1 won!";
}
else if(x1 < x2) {
    document.querySelector("#heading").innerHTML = "Player2 won! 🚩";
}
else {
    document.querySelector("#heading").innerHTML = "Draw!";
}