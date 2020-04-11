var counter = 60;

setInterval( function() {
    counter--;

    if ( counter <= 0){
        id = document.getElementById("count")
        id.innerText = "Quiz Over!";
    } else {
        id = document.getElementById("count");
        id.innerHTML = counter;
    }
}, 1000);


var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timerEl = document.getElementsByClassName("countdown");



var currentQuestion = {};
var score = 0;
var questionCounter = 0;
var availableQuesions = [];



var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

function getNewQuestion() {
 
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
}
  
  startGame();