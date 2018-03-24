var QUIZ = '';

function mainController() {
  //listen for click on start button
  $("main").on("click", "button.js-quiz-start-button", startQuiz);
  //listen for click on answer button
  $("main").on("click", "button.js-quiz-option", processAnswer);
  //listen for click on next question button
  $("main").on("click", "button.js-quiz-next-question", nextQuestion);
  //listen for click on final answer button
  $("main").on("click", "button.js-quiz-view-final", finalizeQuiz);
  renderStartPage();
}

function startQuiz(e) {
  e.preventDefault();
  QUIZ = new QuizData();
  renderQuizPage();
  renderQuestion();
}

function processAnswer(e) {
  e.preventDefault();
  const selected = $(e.target).text();
  const result = QUIZ.checkAnswer(selected);
  QUIZ.updateScore(result);
  renderQuizPage();
  renderAnswer(result);
}

function nextQuestion(e) {
  e.preventDefault();
  QUIZ.advanceQuestionPointer();
  renderQuizPage();
  renderQuestion();
}

function finalizeQuiz(e) {
  e.preventDefault();
  renderFinalResults();
}

$(mainController);
