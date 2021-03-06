document.addEventListener("DOMContentLoaded", function() {

var countDown = 20;

//Models
var score = {
  wins:0,
  loses:0,
  notAnswered: 0
};

var questions = [
  {"id": 1,
    "question": "Which function converts a String to an Array?",
    "answers": [
      "Array.prototype.split()", "String.prototype.split()",
      "String.prototype.splice()","String.prototype.toArray()",
    ],
    "correctAnswer": "String.prototype.split()"
  },
  {
    "id": 2,
    "question": "Which function converts an Array to a String?",
    "answers": [
      "String.prototype.splice()", "Array.prototype.toString()",
      "String.prototype.fromArray()","Array.prototype.split()",
    ],
    "correctAnswer": "Array.prototype.toString()"
  },
  {"id": 3,
    "question": "Which function returns a new Array?",
    "answers": [
      "Array.prototype.forEach", "String.prototype.filter()",
      "Array.prototype.map()","Object.prototype.myEach()",
    ],
    "correctAnswer": "Array.prototype.map()"
  },
];

//Views

  function startView(){
    var indexNum = 0;
    var  greeting = '<h3>Press Start to Begin</h3>';
    var button = '<button id="startButtion" class="waves-effect waves-light btn">Start</button>';
    $('#start').html(greeting);
    $('#start').append(button).on('click', function(){
      $('#start').empty();
      questionView(indexNum);
    });
  }

  function questionView(indexNum) {
      startTimer(indexNum);
      $('#timer').html('<h2>' + countDown + '<h2>');
      var ask = questions[indexNum].question;
      $('#questions').html(ask);
      answerView(indexNum);
    }

function answerView(indexNum){
    questions[indexNum].answers.forEach(function(answer){
      $('#answers').append('<li class="myAns">' + answer + '</li>');
    });
      $('.myAns').on('click', function(){
        answer = $(this).text();
        checkAns(answer, indexNum);
      });
    }

function wrongAnsView(indexNum) {
    stopTimer();
    $('#answers').empty();
    $('#timer').empty();
    var msg =
    '<p>Sorry your answer is incorrect<p>' +
    '<p>The correct answer is ' + questions[indexNum].correctAnswer;
    $('#questions').html(msg);
    indexNum ++;
    returnToQuestionView(indexNum);
  }

  function correctAnsView(answer,indexNum){
    stopTimer();
    $('#answers').empty();
    $('#timer').empty();
    var msg =
    '<p>'+ answer +' was correct!</p>';
    $('#questions').html(msg);
    indexNum ++;
    returnToQuestionView(indexNum);
  }

  function scoreboardView(){
    stopTimer();
    var msg =
    '<p>Wins: ' + score.wins + '</p> <p>Loses: ' + score.loses + '</p>' +
    '<p>Questions not answered: ' + score.notAnswered;
    $('#questions').html(msg);
    $('#answers').html('<button id="startButtion" class="waves-effect waves-light btn">Play Again?</button>')
    .on('click',playAgain);
  }

  function timerView(indexNum){
    countDown --;
    if(countDown === 0){
      stopTimer();
      timesUpView(indexNum);
    }else{
      $('#timer').html('<h2>' + countDown + '<h2>');
    }
  }

  function timesUpView(indexNum){
    score.notAnswered ++;
    $('#timer').empty();
    $('#answers').empty();
    $('#questions').html('<h3>Time is up!</h3>')
    .append('<p>The correct answer was ' + questions[indexNum].correctAnswer);
    indexNum ++;
    returnToQuestionView(indexNum);
  }

//Controllers

function checkAns(answer, indexNum){
  $('#questions').empty();
  $('#answers').empty();
  stopTimer();
  if(answer === questions[indexNum].correctAnswer){
    score.wins ++;
    correctAnsView(answer,indexNum);
  }else {
    score.loses ++;
    wrongAnsView(indexNum);
  }
}

 function returnToQuestionView(indexNum){
  if(indexNum > 2){
    myTimeOut = setTimeout(function() {
        scoreboardView();
     }, 3000);
  }else{
      stopTimer();
  var newInterval = setTimeout(function() {
      questionView(indexNum);
   }, 3000);
 }
}

function startTimer(indexNum){
  start = setInterval(function(){
    timerView(indexNum);
  }, 1000);
}

function stopTimer(){
  countDown = 20;
  clearInterval(start);
}

function playAgain(){
  score.wins = 0;
  score.loses = 0;
  score.notAnswered = 0;
  indexNum = 0;
  $('#questions').empty();
  $('#answers').empty();
  clearInterval(myTimeOut);
  $('#questions').unbind();
  $('#answers').unbind();
  questionView(indexNum);
}

startView();
});
