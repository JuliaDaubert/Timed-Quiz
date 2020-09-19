
// Array of Questions
var questionsArray = [
    {
        title: "Commonly used data types do NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        choices: ["Inline", "Import", "External", "Internal"],
        answer: "Import",
    },
    {
        title: "How to create an array in js ?",
        choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],
        answer: "var A=[]",
    },
    {
        title: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)",
            "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        answer: "querySelectorAll()",
    },

    {   title: "Which JavaScript Random Integers returrns a random number between 0 to 9? ",
        choices: ["Math.floor(Math.random() * 10)", "Math.floor(Math.random() * 9)", "Math.random()", "There is no way to do that." ],
        answer: "Math.floor(Math.random() * 10)",
    }
]

//Variables

var timeLeft = 75;
var timer = document.querySelector("#time");
var startScreen = document.querySelector("#startScreen");
var questionDiv = document.getElementById("questionDiv")
var questionEl = document.getElementById("question");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var startBtn = document.getElementById("startButton");
var resultScreen = document.getElementById ("resultScreen");
var responseDiv = document.getElementById ("response");
var userNameInput = document.getElementById ("playerName");

var currentQuestionIndex = 0;
var correctCount = 0;

//Timer
function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer " + timeLeft;
        //console.log (timeLeft);

        //End game by time- causes bug
       // if (timeLeft === 0) {
       //     clearInterval(timerInterval);
       //     alert("Out of Time");
       //     endGame();
       // }

    }, 1000)
    return (score)
}


startBtn.addEventListener("click", function() {
    renderQuestion(currentQuestionIndex);
    setTime ();
    startScreen.style.display = "none";
    $("#questionDiv").removeClass("hidden");
});

//Render one question

function renderQuestion(questionNumber) {

    var question = questionsArray[questionNumber];

    questionEl.textContent = question.title;
    answerOne.textContent = question.choices[0];
    answerTwo.textContent = question.choices[1];
    answerThree.textContent = question.choices[2];
    answerFour.textContent = question.choices[3];
}



//OnClick Event for Answers

answerOne.addEventListener("click", function (event) {
    console.log("AnswerOne Clicked")

    answerClicked(0);
});
answerTwo.addEventListener("click", function (event) {
    console.log("Answer2 Clicked")

    answerClicked(1);
});
answerThree.addEventListener("click", function (event) {
    console.log("Answer3 Clicked")

    answerClicked(2);
});
answerFour.addEventListener("click", function (event) {
    console.log("Answer4 Clicked")

    answerClicked(3);
});


//Answer Clicked 
function answerClicked(answerNumber) {
    console.log("Answer  Clicked" + answerNumber)
    //Answer Correct
    var question = questionsArray[0];
    var selectedAnswer = question.choices[answerNumber];
    var correctAnswer = question.answer;

    if (correctAnswer == selectedAnswer) {
        //correct answer = next question - alert correct- increment count
        
        alert ("Correct");
        correctCount++

    }
    else {
        //incorrect answer = next question - alert incorrect - decreament by 10 sec time
        
       alert ("Incorrect");
        timeLeft-=10;

    }

    if(currentQuestionIndex <=questionsArray.length){
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
        }
        else {
            //next page alert finished! 
            alert ("finished");
            endGame();
        }
}

function endGame(){

    $("#questionDiv").addClass("hidden");
    $("#resultScreen").removeClass("hidden");

var userName=  userNameInput.value.trim();

//save result to local storage
localStorage.setItem("currentScore", correctCount);
var highscores = JSON.parse(localStorage.getItem("highscore history"));

if (highscores ==null){
    highscores = []
}
var currentRecord = {
    name: userName,
    score: correctCount,
}



highscores.push(currentRecord);
var highscoresstring = JSON.stringify(highscores);
localStorage.setItem("history", highscoresstring);
document.getElementById("score").innerHTML = correctCount;


//show resultScreen

//display the score from local storage



}
