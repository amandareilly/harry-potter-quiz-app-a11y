$.templates("finalMain", `
<div class="row ls-side-by-side-small">
  <img src="images/hogwarts_crest.png" alt="The Hogwarts Crest" class="hogwarts-crest hogwarts-crest-large">
</div>
<div class="row ls-side-by-side-large">
  <div class="col-12 js-quiz-score-tracker">
    <p class="js-quiz-result-text">{{:finalResultText}}</p>
    <p class="js-quiz-score">You scored: <span id="js-quiz-current-score">{{:totalScore}}</span> of <span id="js-quiz-total-score">{{:potentialScore}}</span> points!</p>

    <button class="js-quiz-start-new">{{:startNewButtonText}}</button>
  </div>
</div>
`);
