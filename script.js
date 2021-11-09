/* Students: Please use this week's project for Week 4: Assignment 4: Events + Objects. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */

    const question = [
      "Who makes iPhones?<br>Capitalize first letter",
      "What is the capital of California?<br>Capitalize first letter",
      "How many teams are in the NFL?<br>... teams",
      "How many inches are in a foot?",
      "What is the missing primary color?<br> blue, yellow and ..."
    ];

    const answer = [
      "Apple",
      "Sacramento",
      "32",
      "12",
      "red"
    ];

    let turn = 0; 
document.getElementById("sumbit").addEventListener("click", checkAnswer);

//showQuestion();

function checkAnswer() {
  if (document.getElementById("answer").value == answer[turn]) {document.getElementById("hello").innerHTML = "You are correct"; 
  nextQuestion();}
  else {document.getElementById("hello").innerHTML = "You are incorrect";}
}
showQuestion();
function showQuestion() {
  document.getElementById("question").innerHTML = question[turn];
  document.getElementById("question").innerHTML
  document.getElementById("counter").innerHTML = turn + 1;
}

function nextQuestion() {
  turn = turn + 1;
  if ( turn < question.length ) {
    showQuestion();}
  else {
    document.body.innerHTML = "<h1>You are done</h1>";
   // document.getElementById('2').remove;
    //document.getElementById('counter').remove;
  }
  }
