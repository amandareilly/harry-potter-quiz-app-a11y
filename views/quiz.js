$.templates("quiz", `
<img src="images/hogwarts_crest.png" alt="The Hogwarts Crest" class="hogwarts-crest hogwarts-crest-small">
<div class="js-quiz-score-tracker">
  <h1 class="quiz-score-headline">Your Progress</h1>
  <p class="quiz-score">Current Score: <em>{{:currentScore}}</em> of <em>{{:possibleScore}}</em></p>
  <p class="quiz-counter">Question Number <em>{{:currentQuestionNum}}</em> of <em>{{:numQuestions}}</em></p>
</div>
`);
