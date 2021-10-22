$(document).ready(function() {
  $("#welcomeForm").submit(function(event) {
    event.preventDefault();
    $("#welcomePrompt").fadeOut();
    if ($("#accept").val() === "Yes") {
      $("#survey").fadeIn();
    } else {
      $("#goodbye").fadeIn();
    }
  });

  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    const ideology = $("#ideology").val();
    const strategy = $("#strategy").val();
    const element = $("#element").val();
    const home = $("#home").val();
    const timeToDoomsday = getDaysUntil($("#doomsday").val());

    //Update response card with answers
    $("#greeting").text($("input#name").val());
    $("#chosenLanguage").text(chooseLanguage(ideology, strategy, element));
    $("#chosenOS").text(chooseOS(home));
    if (timeToDoomsday > 0) {
      const doomsdayText = "According to your prediction, time will end in " + timeToDoomsday + " days. Prepare yourself.";
      $("#timeToDoomsday").text(doomsdayText);
    } else {
      $("#timeToDoomsday").text("Your intuition says time has already stopped. This is unlikely.");
    }    

    $("#survey").fadeOut();
    $("#surveyResponse").fadeIn();
  });

  $("#returnButton").click(function() {
    $("#survey").fadeIn();
    $("#surveyResponse").fadeOut();
    $("#surveyForm").trigger("reset");
  });

  $("#returnToOracle").click(function() {
    $("#welcomeForm").trigger("reset");
    $("#goodbye").fadeOut();
    $("#welcomePrompt").fadeIn();
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

function chooseOS(home) {
  let os = "";
  if (home === "Civilization") {
    os = "Mac OS X";
  } else if (home === "Nature") {
    os = "Microsoft Windows";
  } else {
    os = "Linux";
  }
  return os;  
}

function getDaysUntil(endDateStr) {
  const startDate = new Date();
  const endDate = new Date(endDateStr);

  const timeDiffInMS = endDate.getTime() - startDate.getTime();
  return (parseInt(timeDiffInMS / (1000 * 60 * 60 *24))).toString();
}