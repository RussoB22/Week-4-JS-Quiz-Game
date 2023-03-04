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
var currentInterval
var randomQuizQuestion
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
        question: "Where is the Mascot of Russia's 2nd top national sport living?",
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

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

function questionShuffle() {
    shuffle(questions);    
}

questionShuffle();

console.log(questions)
console.log(questions[0])

choice0.textContent = questions[0].choices[0].choice;
choice0.classList.add("correct");
choice0.onclick = function() {
    
}

choices.addEventListener('click', nextQuestion)

function nextQuestion() {
    i++;


}

// Highscore Form

function handleFormSubmit(event) {
    event.preventDefault();

    var highscoreLeader = highscorer; 
    var highscoreListItemEl = document.createElement('li');
    var deleteButtonEl = document.createElement('button');

    if (!highscoreLeader) {
      console.log('Type in a Name.');
      return;
    }

    highscoreListItemEl.text(highscoreLeader);
  
    // add delete button to remove shopping list item
    highscoreListItemEl.appendChild(deleteButtonEl);
  
    // print to the page
    highscoreListEl.append(highscoreListItemEl);
  
    // clear the form input element
    document.querySelector('input[id="gameScoreName"]').value = '';

    var highscoreForm = highscoreFormEl;
        highscoreForm.addEventListener('submit', handleFormSubmit);

  }

// v2

// function handleFormSubmit(event) {
//     event.preventDefault();
  
//     var highscoreLeader = document.querySelector('input[id="gameScoreName"]').value;
//     var highscoreListItemEl = document.createElement('li');
//     var deleteButtonEl = document.createElement('button');
  
//     if (!highscoreLeader) {
//       console.log('Type in a Name.');
//       return;
//     }
  
//     highscoreListItemEl.textContent = highscoreLeader;
  
//     // add delete button to remove highscore list item
//     deleteButtonEl.className = 'btn btn-danger btn-small delete-item-btn';
//     deleteButtonEl.textContent = 'Remove';
//     highscoreListItemEl.appendChild(deleteButtonEl);
  
//     // print to the page
//     var highscoreListEl = document.querySelector('#highscore-list');
//     highscoreListEl.appendChild(highscoreListItemEl);
  
//     // clear the form input element
//     document.querySelector('input[id="gameScoreName"]').value = '';
//   }
  
//   var highscoreFormEl = document.querySelector('#highscore-form');
//   highscoreFormEl.addEventListener('submit', handleFormSubmit);

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
