$.templates('finalMain', `
<img src='images/hogwarts_crest.png' alt='The Hogwarts Crest' class='hogwarts-crest hogwarts-crest-large'>
<h1 class='quiz-result-headline'>{{:finalResults}}</h1>
<div class='quiz-score-tracker'>
  <p class='quiz-result-text'>{{:finalResultText}}</p>
  <p class='final-quiz-score'>Final Score: <em>{{:totalScore}}</em> of <em>{{:potentialScore}}</em> points!</p>
  <button class='js-quiz-start-new'>{{:startNewButtonText}}</button>
</div>
`);
