var currentQuestion = -1;
var quizLength = 0;

// Initial setup
$(document).ready(function() {
  // quizLength = Math.ceil(Math.random()*(quiz["questions"].length-(quiz["questions"].length/2)))+(quiz["questions"].length/2)
  quizLength = Math.ceil(Math.random()*(quiz["questions"].length-(quiz["questions"].length/2))+(quiz["questions"].length/2))
  $('#title').text(quiz["title"]);
  $('#answerChoices').hide();
  $('#nextQuestion').hide();
  $('#nameForm').submit(function (e) {
    e.preventDefault();
    nameForm();
  });
  document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
});

// After name is submitted on initial screen
function nameForm(){
  var nameArray = $('#nameForm').serializeArray();
  var name = nameArray[0]["value"];
  $('#nameForm').hide();
  $('#nextQuestion').show();
  $('#answerChoices').show();
  $('#welcome').text("Welcome " + name + "!");
  nextQuestion();
}

// Go to next question in quiz
function nextQuestion() {
	if (currentQuestion<quizLength-1) {
		currentQuestion+=1;
	}
	console.log(quizLength);
  $('#questionNumber').text("Question " + (currentQuestion+1));
	$('#question').text(quiz["questions"][currentQuestion]["text"]);
  var numAns = 2 + Math.ceil((Math.random()*3));
  console.log(numAns);
  for (var i = 0; i<numAns-1; i++) {
    var aID = "#" + (i + 1);
    $(aID).show();
    console.log(quiz["questions"][currentQuestion]["answers"][i]);
    $(aID).text(quiz["questions"][currentQuestion]["answers"][i]);
  }
  for (var i = numAns; i<5; i++) {
    $('#' + i).hide();
  }
}