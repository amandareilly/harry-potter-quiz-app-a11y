function mainController() {
  console.log("main controller running");
  //listen for click on start button
  $("main").on("click", "button.js-quiz-start-button", firstQuestion);
  //listen for click on answer button
  $("main").on("click", "button.js-quiz-option", processAnswer);
  //listen for click on next question button
  $("main").on("click", "button.js-quiz-next-question", nextQuestion);
  //listen for click on final answer button
  $("main").on("click", "button.js-quiz-view-final", finalizeQuiz);
  //listen for click on new quiz button
  $("main").on("click", "button.js-quiz-start-new", newQuiz);
  let quiz = startQuiz();
  quiz.startPage();
}

function startQuiz() {
  console.log("startQuiz running");
  quiz = new QuizData();
  return quiz;
}

function firstQuestion(e) {
  e.preventDefault();
  quiz.quizPage();
  quiz.renderQuestion();
}

function processAnswer(e) {
  e.preventDefault();
  const selected = $(e.target).text();
  quiz.renderAnswer(selected);
}

function nextQuestion(e) {
  e.preventDefault();
  quiz.advanceQuestionPointer();
  quiz.quizPage();
  quiz.renderQuestion();
}

function finalizeQuiz(e) {
  e.preventDefault();
  quiz.renderFinal();
}

function newQuiz(e) {
  e.preventDefault();
  quiz = new QuizData;
  firstQuestion(e);
}

$(mainController);
