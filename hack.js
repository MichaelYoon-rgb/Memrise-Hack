// FIRST PART
// This is for the page with all the words
var questions = $("body").find(".col .text");
var questionsDict = [];
for (let i = 1; i < questions.length; i = i + 2) {
  questionsDict.push({
    question: questions[i].innerHTML,
    answers: questions[i - 1].innerHTML
  });
}
localStorage.setItem("questionsDict", JSON.stringify(questionsDict));


// SECOND PART
// click on learn these words then run the code below

var Typing = false
function clickFunc(){
  var clickHints = setInterval(function(){
    Typing = true
    if (document.querySelector(".sc-kDDrLX.jEZkvO")) {
      if (document.querySelector(".sc-kDDrLX.jEZkvO").innerHTML === "Correct!" || document.querySelector(".sc-kDDrLX.jEZkvO").innerHTML === "Next"){
        document.querySelector(".sc-kDDrLX.jEZkvO").parentNode.click()
      }
    }

    if (!document.querySelector(".sc-ojuw87-9.hzgUms")){
      Typing = false
      clearInterval(clickHints)
    } else {
      document.querySelector(".sc-ojuw87-9.hzgUms").click()
    }
    
  }, 10)
}
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);
var questionsDict = JSON.parse(localStorage.getItem("questionsDict"));
setInterval(function () {
  if ((document.querySelector(".sc-xix3gw-0.cMFfFu"))) {
    clickFunc()
      
  }
  if (document.querySelector(".sc-ojuw87-2.fiUNlS")){
      question = document.querySelector(".sc-9f618z-2.iiwdhM").innerHTML;
      var result = questionsDict.filter(function (element) {
        return element.question == question || element.answers == question;
      });
      if (question == result[0].question) {
        var answer = result[0].answers;
      } else {
        var answer = result[0].question;
      }
      var accents = false
      for (let i = 0; i < answer.length; i++) {
        var inputButton = document.querySelectorAll(".sc-xix3gw-0.ejjbXp");
        if (answer[i] == " ") {
          document.querySelector(".sc-ojuw87-2.fiUNlS").value =
            document.querySelector(".sc-ojuw87-2.fiUNlS").value + " ";
        }
        for (let j = 0; j < inputButton.length; j++) {
          if (inputButton[j].innerHTML == answer[i]) {
            accents = true
            inputButton[j].click();
          }
        }
      }
      console.log(accents)
      if (accents == false){
        console.log("This bot is currently under construction and will not be able to complete the texting")
        document.querySelector(".sc-bczRLJ.HqagO").click()
      }
      
  }
  if (document.querySelector(".sc-7v3i35-1.iBKyYQ")) {
    console.log("GO TO YOUR SETTINGS AND DISABLE RANDOM TAPPING TESTS");
    question = document.querySelector(".sc-9f618z-2.iiwdhM").innerHTML;
    var result = questionsDict.filter(function (element) {
      return element.question == question || element.answers == question;
    });
    if (question == result[0].question) {
      var answer = result[0].answers;
    } else {
      var answer = result[0].question;
    }
    var answer = answer.replace(/[^a-z0-9\sÀ-ú]/gi, "");

    answerList = answer.split(" ");

    for (let i = 0; i < answerList.length; i++) {
      var inputMultiButton = document.querySelectorAll(".sc-1i3aukn-0.cSrJYT");
      for (let j = 0; j < inputMultiButton.length; j++) {
        if (inputMultiButton[j].innerHTML == answerList[i]) {
          inputMultiButton[j].click();
        }
      }
    }
  }
  if (document.querySelectorAll(".sc-kDDrLX.fGQozY").length) {
    answers = document.querySelectorAll(".sc-kDDrLX.fGQozY");
    question = document.querySelector(".sc-9f618z-2.iiwdhM").innerHTML;
    var result = questionsDict.filter(function (element) {
      return element.question == question || element.answers == question;
    });
    if (question == result[0].question) {
      answer = result[0].answers;
    } else {
      answer = result[0].question;
    }
    var validAnswer = false
    
    for (let i = 0; i < answers.length; i++) {
      
      if (answers[i].innerHTML == answer) {
        validAnswer = true
        answers[i].parentNode.click();
      }
    }
    if (!validAnswer){
      answers[0].parentNode.click()
    }
  }
  console.log(document.querySelector(".sc-bczRLJ.iwutJ") && !Typing)
  if (document.querySelector(".sc-bczRLJ.iwutJ") && !Typing) {
    document.querySelector(".sc-bczRLJ.iwutJ").click();
  }
}, 1);
