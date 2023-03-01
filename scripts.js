var timerEl = document.getElementById('startCountDown');
var startQuiz = document.getElementById("startButton");
var startCard = document.getElementById("startCard")
var quizCard = document.getElementById("quizCard")

function startCountDown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds till quiz starts.";
        if(timeLeft === 0) {
        clearInterval(timeInterval);
        quizCountDown();
        }
        timeLeft--;
    }, 1000);
}

function quizCountDown() {
    var timeLeft = 120;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds till emotional damage.";
        if(timeLeft === 0) {
        clearInterval(timeInterval);
        }
        timeLeft--;
    }, 1000);
}

startQuiz.addEventListener("click", function() {
    quizCountDown();
  })

startQuiz.onclick = function() {
    startCard.style.display = "none";
    quizCard.style.display = "block";
}

startCountDown();
