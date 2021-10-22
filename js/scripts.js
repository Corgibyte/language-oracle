$(document).ready(function() {
  $("#welcomeForm").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    $("#welcomePrompt").toggle();
    $("#survey").toggle();
  });
});