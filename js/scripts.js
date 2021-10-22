$(document).ready(function() {
  $("#welcomeForm").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    $("#welcomePrompt").toggle();
    if ($("#accept").val() === "Yes") {
      $("#survey").toggle();
    } else {
      $("#goodbye").toggle();
    }
  });

  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    const ideology = $("#ideology").val();
    const strategy = $("#strategy").val();
    const element = $("#element").val();
    const home = $("#home").val();
    const doomsday = $("#doomsday").val();

    $("#chosenLanguage").append(chooseLanguage(ideology, strategy, element));

    $("#survey").toggle();
    $("#surveyResponse").toggle();
  });

  $("#returnButton").click(function() {
    $("#survey").toggle();
    $("#surveyResponse").toggle();
    $("#surveyForm").trigger("reset");
  });

  $("#returnToOracle").click(function() {
    $("#welcomeForm").trigger("reset");
    $("#goodbye").toggle();
    $("#welcomePrompt").toggle();
  })
});

// Business logic

function chooseLanguage(ideology, strategy, element) {
  let lang = "";  
  if (ideology === "Order") {
    if (strategy === "Beauty") {
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
    if (strategy === "Beauty") {
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