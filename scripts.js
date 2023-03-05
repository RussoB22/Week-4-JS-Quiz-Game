var timerEl = document.getElementById('startCountDown');
var startQuiz = document.getElementById("startButton");
var startCard = document.getElementById("startCard")
var quizCard = document.getElementById("quizCard")
var quizQuestion = document.getElementById("question")
var choices = document.getElementsByClassName("choice")
var choice0 = document.getElementById("choice0")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
var score = document.getElementById("score")
var results = document.getElementById("resultCard")
var leaderButton = document.getElementById("leaderBoardButton")
var leaderBoard = document.getElementById("leaderBoard")
var highscoreFormEl = document.getElementById("gameScore")
var highscoreListEl = document.getElementById("leaders")
var highscorer = document.getElementById("gameScoreName").value
console.log(highscorer)
var currentInterval
var randomQuizQuestion
var randomQuestion;
var answers = [];
var currentScore = 0

// ountdown Clock Logic

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
    // Change to 120
    var timeLeft = 2;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds till emotional damage.";
        if(timeLeft === 0) {
        clearInterval(timeInterval);
        quizCard.style.display = "none";
        results.style.display = "block";
        }
        timeLeft--;
    }, 1000);
}

startQuiz.onclick = function() {
    startCard.style.display = "none";
    quizCard.style.display = "block";
    clearInterval(currentInterval);
    quizCountDown();
}

startCountDown();

// Question Array/Object

var questions = [
    {
        question: "Fav Pet?",
        choices: [
            {choice: "Dog", 
            isCorrect:true},
            {choice: "Cat",
            isCorrect:false},
            {choice: "Fish",
            isCorrect:false},
            {choice: "Snake",
            isCorrect:false},
            {choice: "Rabbit",
            isCorrect:false}] 
    },
    {
        question: "Fav Book?",
        choices: [
            {choice: "Fiction", 
            isCorrect:true},
            {choice: "Non-Fiction",
            isCorrect:false},
            {choice: "Redacted",
            isCorrect:false},
            {choice: "Weeb crap",
            isCorrect:false},
            {choice: "Where's Waldo",
            isCorrect:false}] 
    },
    {
        question: "Fav Instument?",
        choices: [
            {choice: "Guitar", 
            isCorrect:true},
            {choice: "Bass",
            isCorrect:false},
            {choice: "6 String Bass",
            isCorrect:false},
            {choice: "Really Big Bass",
            isCorrect:false},
            {choice: "Electric Triangle",
            isCorrect:false}] 
    },
    {
        question: "Fav Snack?",
        choices: [
            {choice: "Pringles", 
            isCorrect:true},
            {choice: "Doritos",
            isCorrect:false},
            {choice: "Sun Chips",
            isCorrect:false},
            {choice: "Ghost Peppers",
            isCorrect:false},
            {choice: "Carolina Reapers",
            isCorrect:false}] 
    },
    {
        question: "Where is the Mascot of Russia's 2nd top national team living?",
        choices: [
            {choice: "Moscow", 
            isCorrect:true},
            {choice: "Nadir",
            isCorrect:false},
            {choice: "Despia",
            isCorrect:false},
            {choice: "Albaz",
            isCorrect:false},
            {choice: "Why",
            isCorrect:false}] 
    }
]

// Questions Logic

// function shuffle(arr) {
//     arr.sort(() => Math.random() - 0.5);
// }

// function questionShuffle() {
//     shuffle(questions);
//     for (var i = 0; i < questions.length; i++) {
//       shuffle(questions[i].choices);
//     }
//   }

// questionShuffle();

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3,wrongAnswer4) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer2 = wrongAnswer3;
    this.wrongAnswer2 = wrongAnswer4;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*questions.length);
	randomQuestion = questions[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3, randomQuestion.wrongAnswer4];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("choice0").value= answers[0];
  document.getElementById("choice0").innerHTML= answers[0];
  document.getElementById("choice1").value= answers[1];
  document.getElementById("choice1").innerHTML= answers[1];
  document.getElementById("choice2").value= answers[2];
  document.getElementById("choice2").innerHTML= answers[2];
  document.getElementById("choice3").value= answers[3];
  document.getElementById("choice3").innerHTML= answers[3];
  document.getElementById("choice4").value= answers[4];
  document.getElementById("choice4").innerHTML= answers[4];

}

function choice0_clicked() {
    var choice0 = document.getElementById("choice0").value;
  	checkAnswer(choice0);
}

function choice1_clicked() {
    var choice1 = document.getElementById("choice1").value;
    checkAnswer(choice1);
}

function choice2_clicked() {
    var choice2 = document.getElementById("choice2").value;
  	checkAnswer(choice2);
}

function choice3_clicked() {
    var choice3 = document.getElementById("choice3").value;
  	checkAnswer(choice3);
}

function choice4_clicked() {
    var choice4 = document.getElementById("choice4").value;
  	checkAnswer(choice4);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  } else {
     {
      currentInterval/2;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    alert("Loser!");
    adjustScore(false);
  }	  
}


console.log(questions)
console.log(questions[0])

// choice0.textContent = questions[0].choices[0].choice;
// choice0.addEventListener('click', selectChoice)

// function selectChoice() {
//     if (correct) {
//         currentScore++;
//     } else { 
//         currentInterval/2;
//     } 
    
// }

// Highscore Form

function handleFormSubmit(event) {
    event.preventDefault();
  
    var highscoreListItemEl = document.createElement('li');
    var highscorer = document.querySelector('input[id="gameScoreName"]').value;
  
    highscoreListItemEl.textContent = highscorer + " " + currentScore;
    
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

