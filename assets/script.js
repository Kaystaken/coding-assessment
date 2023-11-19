var questionList = [
    {
        question: "Commonly used datas types DO NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswerIndex: 2
    },
    {
        question: "The condition in an if / else statement is enclosed with ____________.",
        answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswerIndex: 2
    },
    {
        question: "Arrays in JavaScript can be used to store _____________.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswerIndex: 3
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correctAnswerIndex: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswerIndex: 3
    }
];

var instructions = document.querySelector("#intro");
var questions = document.querySelector("#questions");
questions.setAttribute("style", "display: none;");

var questionText = document.querySelector("#question-text");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");

var startButton = document.querySelector("#start-quiz");
startButton.addEventListener("click", displayQuestions);
displayQuestion(0);

function displayQuestions() {
    instructions.setAttribute("style", "display: none;");
    questions.setAttribute("style", "");
}

function displayQuestion(questionNumber) {
    var question = questionList[questionNumber];
    questionText.textContent = question.question;
    answer1.textContent = question.answers[0];
    answer2.textContent = question.answers[1];
    answer3.textContent = question.answers[2];
    answer4.textContent = question.answers[3];
}
