function renderStartPage() {
  const headerHTML = `
  <h1 class="js-quiz-headline-question">Are you the Ultimate Potterhead?</h1>
  <img src="images/hogwarts_crest.png" alt="The Hogwarts Crest">
  `;
  const mainHTML = `
    <button class="js-quiz-start-button">Start The Quiz</button>
  `;
  $("header").html(headerHTML);
  $("main").html(mainHTML);
}

function renderQuizPage() {
  const headerHTML = `
  <div class="col-6">
    <img src="images/hogwarts_crest.png" alt="The Hogwarts Crest">
  </div>
  <div class="col-6 js-quiz-score-tracker">
    <h2 class="js-quiz-score">Current Score: <span id="js-quiz-current-score">X</span> of <span id="js-quiz-total-score">Y</span></h2>
    <h2 class="js-quiz-counter">Question Number <span id="js-quiz-current-question">X</span> of <span id="js-quiz-total-questions">Y</span></h2>
  </div>
  `;

  $("header").addClass("row").html(headerHTML);
}

function renderQuestion() {
  const questionText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const questionAnswers = ["A", "B", "C", "D"];
  let optionHTML = "";

  for(let answer in questionAnswers) {
    optionHTML += `<button class="col-6 js-quiz-option">${answer}</button>\n`;
  }

  const mainHTML = `
  <form action="#" class="js-quiz-container">
    <div class="row js-quiz-question-container">
      <div class="col-12 js-quiz-question">
        ${questionText}
      </div>
    </div>
    <div class="row js-quiz-options-container">
      ${optionHTML}
    </div>
  </form>
  `;

  $("main").html(mainHTML);
}

function renderAnswer() {
  const resultAnswer = "You got it right!"
  const resultFactoid = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const resultImage = 'hermoine_polyjuice.jpg';
  const resultImageAlt = "Some Alt text.";
  const nextQuestionButtonText = "Next Question";
  const mainHTML = `
  <div class="row js-quiz-result-container">
    <div class="col-12">
      <h3 class="js-quiz-result-text">${resultAnswer}</h3>
    </div>
    <div class="col-6 js-quiz-result-image-container">
      <img src="images\\${resultImage}" alt="${resultImageAlt}" class="js-quiz-result-image">
    </div>
    <div class="col-6 js-quiz-result-factoid">
      <div>
        ${resultFactoid}
      </div>
      <button class="js-quiz-next-question">${nextQuestionButtonText}</button>
    </div>
  </div>
  `;

  $("main").html(mainHTML);
}

function renderFinalResults() {
  const finalResults = "You are the Ultimate Potterhead!";
  const headerHTML = `
  <h1 class="js-quiz-result-headline">${finalResults}</h1>
  <img src="images/hogwarts_crest.png" alt="The Hogwarts Crest">
  `;
  const totalScore = 10;
  const potentialScore = 10;
  const finalResultText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const mainHTML = `
  <div class="row">
    <div class="col-12 js-quiz-score-tracker">
      <p class="js-quiz-score">You scored: <span id="js-quiz-current-score">${totalScore}</span> of <span id="js-quiz-total-score">${potentialScore}</span> points!</p>
      <p class="js-quiz-result-text">${finalResultText}</p>
      <button id="js-start-new-quiz">Start New Quiz!</button>
    </div>
  </div>
  `;

  $("header").html(headerHTML);
  $("main").html(mainHTML);
}
