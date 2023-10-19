// Quiz
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("answer1").value.toLowerCase();
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  let answer4 = document.getElementById("answer4").value.toLowerCase();
  let output1 = document.getElementById("output1");
  let output2 = document.getElementById("output2");
  let output3 = document.getElementById("output3");
  let output4 = document.getElementById("output4");
  let numCorrect = 0;

  // Proccess
  if (answer1 === "quartz") {
    output1.innerHTML = "Correct!";
    numCorrect++;
  } else {
    output1.innerHTML = "Incorrect";
  }

  if (answer2 === "incorrect" || answer2 === "false") {
    output2.innerHTML = "Correct!";
    numCorrect++;
  } else {
    output2.innerHTML = "Incorrect";
  }

  if (answer3 === "correct" || answer3 === "true") {
    output3.innerHTML = "Correct!";
    numCorrect++;
  } else {
    output3.innerHTML = "Incorrect";
  }

  if (answer4 === "ruby") {
    output4.innerHTML = "Correct!";
    numCorrect++;
  } else {
    output4.innerHTML = "Incorrect";
  }

  if (numCorrect <= 2) {
    document.getElementById("goodBad").innerHTML = "Try Again!";
  } else if (numCorrect < 4) {
    document.getElementById("goodBad").innerHTML = "Almost There!";
  } else {
    document.getElementById("goodBad").innerHTML = "Nailed It!";
  }

  // Output
  document.getElementById("numCorrect").innerHTML = numCorrect;
  document.getElementById("percentCorrect").innerHTML = (numCorrect / 4) * 100;
}
