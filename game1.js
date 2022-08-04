let navBar = document.getElementById("nav");
let startBtn = document.getElementById("start-btn");
let showQuestion = document.getElementById("showQuestion");
let nxtBtn = document.getElementById("myNxtBtn");
let time = document.getElementById("clock");
let finishBtn = document.getElementById("finishBtn");
let cmpMsg = document.getElementById("completeMsg");

finishBtn.style.display = "none";
cmpMsg.style.display = "none";

let qusCount = 0;
let crtAnswer = "";
showQuestion.style.display = "none";

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
let currentAns = document.getElementById("showAnswer");
btn.style.display = "none";
nxtBtn.style.display = "none";
time.style.display = "none";
btn.onclick = function () {
  modal.style.display = "block";
  currentAns.innerHTML = crtAnswer;
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function StartBtn() {
  navBar.style.display = "none";
  startBtn.style.display = "none";
  showQuestion.style.display = "block";
  btn.style.display = "block";
  nxtBtn.style.display = "block";
  time.style.display = "block";
  showQueTable(qusCount);
}

function showQueTable(index) {
  crtAnswer = questions[index].answer;
  let qusTable = `<div>
        <h1>${questions[index].question}</h1>
        <img style="width: 600px" src='${questions[index].options}'>
        <p>${index + 1 + "/" + questions.length}</p>
    </div>`;
  showQuestion.innerHTML = qusTable;
  console.log(index == questions.length - 1);
  if (index == questions.length - 1) {
    nxtBtn.style.display = "none";
    finishBtn.style.display = "block";
  }
}
timeLeft = 20;

function nxtQues() {
  qusCount++;
  // console.log(qusCount);
  showQueTable(qusCount);
  timeLeft = 20;
  countdown();
}
function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  }
}
setTimeout(countdown, 1000);

function FinishBtn() {
  navBar.style.display = "block";
  cmpMsg.style.display = "block";
  startBtn.style.display = "none";
  showQuestion.style.display = "none";
  btn.style.display = "none";
  nxtBtn.style.display = "none";
  time.style.display = "none";
  finishBtn.style.display = "none";
}
