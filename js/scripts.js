$(document).ready(function() {
  $("#welcomeForm").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    $("#welcomePrompt").toggle();
    $("#survey").toggle();
  });

  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    const ideology = $("#ideology").val();
    const strategy = $("#strategy").val();
    const element = $("#element").val();
    const home = $("#home").val();
    const doomsday = $("#doomsday").val();

    $("#responseText").append(chooseLanguage(ideology, strategy, element));

    $("#survey").toggle();
    $("#surveyResponse").toggle();
  });
});

// Business logic

function chooseLanguage(ideology, strategy, element) {
  let lang = "";  
  if (ideology === "Order") {
    if (strategy === "Form") {
      if (element === "1") {
        lang = "Lisp";
      } else {
        lang = "Haskell";
      }
    } else {
      if (element === "1") {
        lang = "Swift";
      } else {
        lang = "Scala";
      }
    }
  } else {
    if (strategy === "Form") {
      if (element === "1") {
        lang = "Ruby";
      } else {
        lang = "C#";
      }
    } else {
      if (element === "1") {
        lang = "C++";
      } else {
        lang = "Python";
      }
    }
  }
  return lang;
}