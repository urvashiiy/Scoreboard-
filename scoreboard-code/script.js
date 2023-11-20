function updateScore(teamNumber, points) {
    
    var scoreElement = document.getElementById("score" + teamNumber);

    var currentScore = parseInt(scoreElement.innerText);
    var newScore = currentScore + points;

    scoreElement.innerText = newScore;

}
