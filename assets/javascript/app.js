document.addEventListener("DOMContentLoaded", function() {

//Models
var score = {
  wins:0,
  loses:0,
  "Not Answered": 0
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
  }
];

//View

  //Start view
  function startView(){
    var indexNum = 0;
    var  greeting =
    '<h3>Press Start to Begin</h3>';
    var button =
    '<button id="startButtion" class="waves-effect waves-light btn">Start</button>';
    $('#start').html(greeting);
    $('#start').append(button).on('click', function(){
      $('#start').empty();
      questionView(indexNum);
    });
  };
  //end Start view

  //Question and Answer View
  function questionView(indexNum) {
      var ask = questions[indexNum].question;
      $('#questions').html(ask);
      answerView(indexNum);
    };




  //end Question and Answer view
  function answerView(indexNum){
  questions[indexNum].answers.forEach(function(answer){
      $('#answers').append('<li class="question">' + answer + '</li>')
        })
      $('.question').on('click', function(){
        answer = $(this).text();
        checkAns(answer, indexNum);
      })
    }

  //Wrong Answer view
  function wrongAns(indexNum) {
    console.log('wrong');
    console.log(indexNum);
  }
  //end Wrong Answer view

  //Correct Answer view
  function correctAns(answer,indexNum){
    var msg =
    '<p>'+ answer +' was correct!</p>';
    $('#answers').empty();
    $('#questions').html(msg);
    indexNum ++;
    returnToQuestionView(indexNum);
  }
  //end Correct Answer view

  //Score Board view

  //end Score Board view

  // Update Timer view

  //end Update Timer view




//Controllers
function checkAns(answer, indexNum){
  if(answer == questions[indexNum].correctAnswer){
    score.wins ++;
    correctAns(answer,indexNum);
  }else {
    score.loses ++;
    wrongAns(indexNum);
  }
};

var returnToQuestionView = function (indexNum){
  if(indexNum >= questions.length){
    console.log('scoreboard');
  }else{
  var newInterval = setTimeout(function() {
      questionView(indexNum);
   }, 5000);
 }
}


startView();
}); //do not write below here. End of Document rdy fn
