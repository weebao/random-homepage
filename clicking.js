function formatTime(time) {
    //Divide to minutes and seconds
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    //Add a leading zero for number < 10
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    //Format in MM:SS
    return `${minutes}:${seconds}`
}

let timeInterval = null;

function startTime() {
    //Time variables
    let timePassed = 0;
    const TIME_LIMIT = 30;
    let timeLeft = TIME_LIMIT;

    //Countdown by seconds
    timeInterval = setInterval(() => {
        timePassed++;
        timeLeft = TIME_LIMIT - timePassed;

        document.getElementById("timer").innerHTML = formatTime(timeLeft);

        if (timeLeft == 0) {
            clearInterval(timeInterval);
            checkReset();
            document.getElementById("game-button").style.pointerEvents = "none";
        }
    }, 1000);
}

function randomPos() {
    var changeTop = (Math.random() * (20 - 0) + 0);
    var changeLeft = (Math.random() * (90 - 10) + 10);
    $("#game-button").css("margin-top", changeTop + "%");
    $("#game-button").css("margin-left", changeLeft + "%");
}

var score = 0;
var highScore = 0;

function startGame() {
    //Score label
    document.getElementById("score-label").innerHTML = "Score: 0";
    if (highScore > 0) {
        document.getElementById("high-score-label").innerHTML = "High score: " + highScore;
    }

    //Start button
    let clickedButton = document.getElementById("clicking-button");
    clickedButton.style.visibility = "hidden";
    clickedButton.style.pointerEvents = "none";

    //Game button
    let gameButton = document.getElementById("game-button");
    gameButton.style.pointerEvents = "auto";
    gameButton.style.visibility = "visible";

    randomPos();
}

document.getElementById("game-button").addEventListener("click", () => {
    randomPos();
    score = score + 1;
    document.getElementById("score-label").innerHTML = `Score: ${score}`;
});

function resetGame() {
    //Reset score, time and button
    checkReset();
    let clickedButton = document.getElementById("clicking-button");
    clickedButton.style.visibility = "visible";

    clearInterval(timeInterval);
    document.getElementById("timer").innerHTML = "00:30";
    clickedButton.style.pointerEvents = "auto";

    let gameButton = document.getElementById("game-button");
    gameButton.style.pointerEvents = "none";
}

function checkReset() {
    if (score > highScore) {
        highScore = score;
        document.getElementById("high-score-label").innerHTML = "You got a high score!";
    }
    score = 0;
}

document.getElementById("clicking-button").addEventListener("click", () => {
    startTime();
    startGame();
    });

document.getElementById("reset-button").addEventListener("click", () => {
    resetGame();
    document.getElementById("game-button").style.visibility = "hidden";
})
