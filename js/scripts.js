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

    processSurvey(ideology, strategy, element, home, doomsday);

    $("#survey").toggle();
    $("#surveyResponse").toggle();
  });
});

// Business logic

function processSurvey(ideology, strategy, element, home, doomsday) {
  console.log(ideology);
  console.log(strategy);
  console.log(element);
  console.log(home);
}