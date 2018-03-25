$.templates("quiz", `
<div class="col-6">
  <img src="images/hogwarts_crest.png" alt="The Hogwarts Crest" class="hogwarts-crest hogwarts-crest-small">
</div>
<div class="col-6 js-quiz-score-tracker">
  <h2 class="js-quiz-score">Current Score: <span id="js-quiz-current-score">{{:currentScore}}</span> of <span id="js-quiz-total-score">{{:possibleScore}}</span></h2>
  <h2 class="js-quiz-counter">Question Number <span id="js-quiz-current-question">{{:currentQuestionNum}}</span> of <span id="js-quiz-total-questions">{{:numQuestions}}</span></h2>
</div>
`);
