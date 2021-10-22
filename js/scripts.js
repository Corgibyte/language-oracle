$(document).ready(function() {
  $("#welcomeForm").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    $("#welcomePrompt").toggle();
    $("#survey").toggle();
  });

  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    const ideology = $("input#ideology").val();
    const strategy = $("input#strategy").val();
    const element = $("input#element").val();
    const home = $("input#home").val();
    const doomsday = $("input#doomsday").val();

    //processSurvey(ideology, strategy, element, home, doomsday);

    //$("#survey").toggle();
    //$("#surveyResponse").toggle();
  });
});

// Business logic

/* function processSurvey(ideology, strategy, element, home, doomsday) {
  $("#response-card").text(ideology + strategy + element + home + doomsday);
} */