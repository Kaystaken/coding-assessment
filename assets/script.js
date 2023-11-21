var timeLeft = 60;
var currentQuestion = 0;
var timer;

//questions and answers are put into an array
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

var instructions = document.querySelector("#instructions");
var questions = document.querySelector("#questions");
var ending = document.querySelector("#ending");
var highScores = document.querySelector("#high-scores");

//display none hides them when I don't want them shown
questions.setAttribute("style", "display: none;");
ending.setAttribute("style", "display: none;");
highScores.setAttribute("style", "display: none;");

var questionText = document.querySelector("#question-text");
var answer1 = document.querySelector("#answer-1");
answer1.addEventListener("click", function () {
    nextQuestion(0);
});
var answer2 = document.querySelector("#answer-2");
answer2.addEventListener("click", function () {
    nextQuestion(1);
});
var answer3 = document.querySelector("#answer-3");
answer3.addEventListener("click", function () {
    nextQuestion(2);
});
var answer4 = document.querySelector("#answer-4");
answer4.addEventListener("click", function () {
    nextQuestion(3);
});

//activated submit button
var submit = document.querySelector("#submit");
submit.addEventListener("click", submitInitials);


//allows you to view high scores
var viewHighScore = document.querySelector("#view-high-score");
viewHighScore.addEventListener("click", displayHighScores);

var back = document.querySelector("#back");
back.addEventListener("click", displayInstructions);

var clear = document.querySelector("#clear");
clear.addEventListener("click", clearHighScores);

var startButton = document.querySelector("#start-quiz");
// start quiz button makes timer and quiz begin
startButton.addEventListener("click", startQuiz);
displayQuestion(0);


function displayInstructions() {
    highScores.setAttribute("style", "display: none;");
    instructions.setAttribute("style", "");
}

// displays the questions/starts the quiz
function startQuiz() {
    currentQuestion = 0;
    timeLeft = 60;
    timer = startTimer();
    // display none hides the instructions
    instructions.setAttribute("style", "display: none;");
    // removing display none reveals the question
    questions.setAttribute("style", "");
}

function endQuiz() {
    clearInterval(timer);
    var endTime = document.querySelector("#time-left");
    endTime.textContent = timeLeft;
    var score = document.querySelector("#score");
    score.textContent = timeLeft;
    // display none hides the questions
    questions.setAttribute("style", "display: none;");
    // removing display none reveals the ending
    ending.setAttribute("style", "");
}

//displays questions and answer options from the array
function displayQuestion(questionNumber) {
    var question = questionList[questionNumber];
    questionText.textContent = question.question;
    answer1.textContent = question.answers[0];
    answer2.textContent = question.answers[1];
    answer3.textContent = question.answers[2];
    answer4.textContent = question.answers[3];
}

function nextQuestion(answerIndex) {
    var question = questionList[currentQuestion];
    var isCorrect = answerIndex === question.correctAnswerIndex;
    
    //10 seconds is subtracted when ansers are incorrect
    if (!isCorrect) {
        timeLeft -= 10;
    }

    displayResult(isCorrect);
    currentQuestion++;

    //quiz ends when there are no more questions
    if (currentQuestion >= questionList.length) {
        endQuiz();
    } else {
        displayQuestion(currentQuestion);
    }
}

//this function displays the result (correct/wrong)
function displayResult(isCorrect) {
    var result = document.querySelector("#result");
    if (isCorrect) {
        result.textContent = "Correct!";        
    } else {
        result.textContent = "Wrong!";       
    }
}

function clearResult() {
    var result = document.querySelector("#result");
    result.textContent = "";    
}

function startTimer() {
    var timer = document.querySelector("#time-left");
    timer.textContent = timeLeft;

    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
    return timerInterval;
}

function submitInitials(event) {
    event.preventDefault();
    
    var initialsInput = document.querySelector("#initials");

    var score = {
        initials: initialsInput.value.trim(),
        score: timeLeft
    };

    // if scores is null use an empty array
    var scores = JSON.parse(localStorage.getItem("score")) ?? [];
    console.log("score:", scores);
    scores.push(score);
    localStorage.setItem("score", JSON.stringify(scores));
    displayHighScores();
}

// result is cleared when high score page is showing as well as when quiz restarts
function displayHighScores() {
    clearResult();
    instructions.setAttribute("style", "display: none;");
    ending.setAttribute("style", "display: none;");
    highScores.setAttribute("style", "");

    var scoreList = document.querySelector("#scores");
    scoreList.textContent = "";

    var scores = JSON.parse(localStorage.getItem("score"));

    for (var count = 0; count < scores.length; count++) {
        var score = scores[count];
        var scoreListItem = document.createElement("li");

        scoreListItem.textContent = score.initials + " - " + score.score;
        
        scoreList.appendChild(scoreListItem);
    }
}

function clearHighScores() {
    var scoreList = document.querySelector("#scores");
    scoreList.textContent = "";
    localStorage.setItem("score", JSON.stringify([]));
}