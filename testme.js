// Define an array of quiz questions
var quizQuestions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Yen", "Dollar", "Euro", "Pound"],
      correctAnswer: "Yen"
    }
  ];
  
  // Define a variable to keep track of the score
  var score = 0;
  
  // Loop through each quiz question
  for (var i = 0; i < quizQuestions.length; i++) {
    // Display the current question and choices
    var currentQuestion = quizQuestions[i].question;
    var currentChoices = quizQuestions[i].choices.join(", ");
    var userAnswer = prompt(currentQuestion + "\n\n" + currentChoices);
  
    // Check if the user's answer is correct
    if (userAnswer === quizQuestions[i].correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Sorry, that's incorrect.");
    }
  }
  
  // Display the final score
  alert("Quiz complete! Your final score is " + score + " out of " + quizQuestions.length + ".");
  