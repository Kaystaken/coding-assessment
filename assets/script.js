var questions = document.querySelector("#questions");
var instructions = document.querySelector("#intro");

var questionText = document.querySelector("#question-text");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");

var questions = [
    {
        question: "Commonly used datas types DO NOT include:",
        answers: [
            "1. strings", "2. booleans", "3. alerts", "4. numbers"
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with____________.",
        answers: [
            "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store_____________.",
        answers: [
            "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"
        ]
    },
];

function displayQuestion(questionNumber) {
    var question = questions[questionNumber];
    questionText.textContent = question.question;
    answer1.textContent = question.answers[0];
    answer2.textContent = question.answers[1];
    answer3.textContent = question.answers[2];
    answer4.textContent = question.answers[3];
}
/*
displayQuestionOne();

function displayQuestionOne() {
    questionText.textContent = "Commonly used datas types DO NOT include:";
    answer1.textContent = "1. strings";
    answer2.textContent = "2. booleans";
    answer3.textContent = "3. alerts";
    answer4.textContent = "4. numbers";

}
function displayQuestionTw0() {
    questionText.textContent = "The condition in an if / else statement is enclosed with_________.:";
    answer1.textContent = "1. quotes";
    answer2.textContent = "2. curly brackets";
    answer3.textContent = "3. parenthesis";
    answer4.textContent = "4. square brackets";
    */