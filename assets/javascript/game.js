var totalScore = $('#totalScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
totalScore.html('0'); //
var numberToMatch = $('#random-number');
numberToMatch.html(randomNumber);

function randomNumber() {
    return Math.floor((Math.random() * 100) + 10);
}





function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
//red.setAttribute("value", "5");
console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// add an event listener to elements
red.addEventListener('click', function() {
    //this refers to red
    addToScore(this.value);
    checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

blue.addEventListener('click', function() {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});

yellow.addEventListener('click', function() {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});

green.addEventListener('click', function() {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);


function checkPlayerScore() {
    //yourScore, targetScore (parseFloat() is for decimals)
    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
    } else if (playerInt > targetInt) {
        alert('You lose!');
    }
}

console.log(getRandomValue(10, 4));