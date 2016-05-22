document.addEventListener("DOMContentLoaded", function() {

//Model
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
      "String.prototype.splice()", "Array.prototype.toString()", "String.prototype.fromArray()"
    ],
    "correctAnswer": "Array.prototype.toString()"
  }
];

//View

  //Start view
  function startView(){
    questionNum = questions[0]
    var  greeting =
    '<h3>Press Start to Begin</h3>'
    var button =
    '<button id="startButtion" class="waves-effect waves-light btn">Start</button>';
    $('#start').html(greeting);
    $('#start').append(button).on('click', function(){
      $('#start').empty();
      questionView(questionNum);
    });
  };
  //end Start view

  //Question and Answer View
  function questionView(questionNum) {
    var ask = questionNum.question;
    $('#questions').html(ask);
    answerView(questionNum)

    }
  //end Question and Answer view
  function answerView(questionNum){
    var answers = questionNum.answers.forEach(function(answer){
      $('#answers').append('<li id="lightup">' + answer + '</li>');
    })
  }
  //Wrong Answer view

  //end Wrong Answer view

  //Correct Answer view

  //end Correct Answer view

  //Score Board view

  //end Score Board view

  // Update Timer view

  //end Update Timer view




//Controllers

startView();
}); //do not write below here. End of Document rdy fn
