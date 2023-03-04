var timerEl = document.getElementById('startCountDown');
var startQuiz = document.getElementById("startButton");
var startCard = document.getElementById("startCard")
var quizCard = document.getElementById("quizCard")
var choices = document.getElementsByClassName("choice")
console.log(choices)
var choice0 = document.getElementById("choice0")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
var currentInterval

function startCountDown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds till quiz starts.";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            startCard.style.display = "none";
            quizCard.style.display = "block";
            quizCountDown();
        }
        timeLeft--;
    }, 1000);
    currentInterval = timeInterval
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

// startQuiz.addEventListener("click", function() {
    
//   })

startQuiz.onclick = function() {
    startCard.style.display = "none";
    quizCard.style.display = "block";
    clearInterval(currentInterval);
    quizCountDown();
}

startCountDown();

var questions = [
    {
        question: "What is a local variable?",
        choices: [
            {choice: "A variable within a function", 
            isCorrect:true},
            {choice: "a drink",
            isCorrect:false},
            {choice: "coffee",
            isCorrect:false},
            {choice: "a triagular shaped snack",
            isCorrect:false},
            {choice: "pork",
            isCorrect:false}] 
    },
    {
        question: "What is a local variable??",
        choices: [
            {choice: "A variable within a function", 
            isCorrect:true},
            {choice: "a drink",
            isCorrect:false},
            {choice: "coffee",
            isCorrect:false},
            {choice: "a triagular shaped snack",
            isCorrect:false},
            {choice: "pork",
            isCorrect:false}] 
    },
    {
        question: "What is a local variable???",
        choices: [
            {choice: "A variable within a function", 
            isCorrect:true},
            {choice: "a drink",
            isCorrect:false},
            {choice: "coffee",
            isCorrect:false},
            {choice: "a triagular shaped snack",
            isCorrect:false},
            {choice: "pork",
            isCorrect:false}] 
    }
]

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

function chosenquestion() {
    shuffle(questions);
    shuffle(this.choices);
console.log(jsQuestion3.choices)
}

choice0.textContent = questions[0].choices[0].choice;
choice0.classList.add("correct");
choice0.onclick = function() {
    
}

choices.onclick = function() {
    alert("correct");
}

// function getRandom(arr) {
//     var randIndex = Math.floor(Math.random() * arr.length);
//     var randElement = arr[randIndex];
//     return randElement;
//   }



