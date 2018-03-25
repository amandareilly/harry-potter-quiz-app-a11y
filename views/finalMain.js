$.templates("finalMain", `
<img src="images/hogwarts_crest.png" alt="The Hogwarts Crest" class="hogwarts-crest hogwarts-crest-large">
<div class="quiz-score-tracker">
  <p class="quiz-result-text">{{:finalResultText}}</p>
  <p class="quiz-score">You scored: <em>{{:totalScore}}</em> of <em>{{:potentialScore}}</em> points!</p>
  <button class="js-quiz-start-new">{{:startNewButtonText}}</button>
</div>
`);
