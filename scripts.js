var timerEl = document.getElementById('startCountDown');
var startQuiz = document.getElementById("startButton");
var startCard = document.getElementById("startCard");
var quizCard = document.getElementById("quizCard");
var score = document.getElementById("score");
var results = document.getElementById("resultCard");
var leaderButton = document.getElementById("leaderBoardButton");
var leaderBoard = document.getElementById("leaderBoard");
var highscoreFormEl = document.getElementById("gameScore");
var highscoreListEl = document.getElementById("leaders");
var highscorer = document.getElementById("gameScoreName").value;
var resetbutton = document.getElementById("reset");
console.log(highscorer);
var currentInterval
var randomQuizQuestion
var randomQuestion;
var answers = [];
var currentScore = 0
var penaltyCount = 0

// Countdown Clock Logic

function startCountDown() {
    var timeLeft = 30;
    timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds till quiz starts.";
            startCard.style.display = "block";
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            startCard.style.display = "none";
            quizCard.style.display = "block";
            quizCountDown();
        }
        timeLeft--;
    }, 1000);
    currentInterval = timeInterval;
}

function quizCountDown() {
    // Change to 60
    var timeLeft = 60 - penaltyCount * 10;
    timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds till emotional damage.";
 
        if(timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timeInterval);
            quizCard.style.display = "none";
            results.style.display = "block";
            timerEl.style.display = "none";
        }
        timeLeft--;
    }, 1000);
    currentInterval = timeInterval;
}

startQuiz.onclick = function() {
    startCard.style.display = "none";
    quizCard.style.display = "block";
    clearInterval(currentInterval);
    quizCountDown();
}

// Question Array/Object

var quiz = [];
quiz[0] = new Question("What is an Array?", 
    "Arrays are used to store multiple values in a single variable.", 
    "An impressive display or range of a particular type of thing.", 
    "A large group of things or people.",
    "A fancy lazer.",
    "An ancient Ethiopian greeting.");
quiz[1] = new Question("What is an object?", 
    "A standalone entity, with properties and type.", 
    "A material thing that can be seen and touched.", 
    "A person or thing to which a specified action or feeling is directed.",
    "To say something to express one's disapproval of or disagreement with something.",
    "To oppose something firmly usually with words.");
quiz[2] = new Question("What is not a Primitive datatype?", 
    "smotint", 
    "bigint", 
    "undefined", 
    "null", 
    "symbol");
quiz[3] = new Question("Which is not a logical operator?",
    "#",
    "||",
    "&&",
    "!=",
    "%");
quiz[4] = new Question("In the array STUDENT_NAME = [Andre, Karl, Rashida, Olivia, Sid] Who is STUDENT_NAME[1]?", 
    "Karl", 
    "Andre", 
    "Rashida",
    "Olivia",
    "Sid");
quiz[5] = new Question("Which of the following is not a Javascript scope?",
    "Ghost", 
    "Block", 
    "Local",
    "Global",
    "Local");
quiz[6] = new Question("Which is not a Javascript Array method?", 
    "Touch removes the targeted element of an Array", 
    "Push adds elements to the end of an Array.", 
    "Pop remove the last element in an Array.",
    "Shift remove the first element in an Array.",
    "Unshift adds elements to the front of an Array");
quiz[7] = new Question("What is JSON?",
    "A lightweight data interchange format",
    "A lightweight data intrachange format",
    "a lite data intrachange format",
    "a lite data interchange formatting code",
    "a lite data intrachange formatting code");

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3,wrongAnswer4) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
    this.wrongAnswer4 = wrongAnswer4;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //gets Question
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3, randomQuestion.wrongAnswer4];
  shuffle(answers);
  quiz.splice(randomNumber, 1);
  if (quiz.length < 1) {
    quizCard.style.display = "none";
    results.style.display = "block";
    timerEl.style.display = "none";

  }
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];
  document.getElementById("answerE").value= answers[4];
  document.getElementById("answerE").innerHTML= answers[4];

}

function answerA_clicked() {
    var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}
function answerB_clicked() {
    var answerB = document.getElementById("answerB").value;
    checkAnswer(answerB);
}
function answerC_clicked() {
    var answerC = document.getElementById("answerC").value;
    checkAnswer(answerC);
}
function answerD_clicked() {
    var answerD = document.getElementById("answerD").value;
    checkAnswer(answerD);
}
function answerE_clicked() {
    var answerE = document.getElementById("answerE").value;
    checkAnswer(answerE);
}

function adjustScore(isCorrect) {
  if (isCorrect) {
    currentScore++;
  } else {
    if (currentScore > 0) {
    currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    adjustScore(false);
    btnProvideQuestion();
    penaltyCount++;
    clearInterval(currentInterval);
    quizCountDown();
    
  }	  
}

// Highscore Form

function handleFormSubmit(event) {
    event.preventDefault();
  
    var highscoreListItemEl = document.createElement('li');
    var highscorer = document.querySelector('input[id="gameScoreName"]').value;
  
    highscoreListItemEl.textContent = highscorer + ": " + currentScore;
    
    // print to the page
    highscoreListEl.appendChild(highscoreListItemEl);
    
    // clear the form input element
    document.querySelector('input[id="gameScoreName"]').value = '';
  }
  
  highscoreFormEl.addEventListener('submit', handleFormSubmit);

// Leaderboard


leaderButton.addEventListener('click', showLeaders);

function showLeaders() {
    leaderBoard.style.display = "block";
    leaderButton.style.display = "none";

}

leaderBoard.addEventListener('click', hideLeaders)

function hideLeaders() {
    leaderBoard.style.display = "none";
    leaderButton.style.display = "block";
}

// Restart Button

resetbutton.addEventListener('click', restartQuiz)

function restartQuiz() {
    location.reload();
}

startCountDown();