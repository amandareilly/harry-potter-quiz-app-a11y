$.templates("answer", `
<h1 class="js-quiz-result-text">{{:resultAnswer}}</h3>
<img src="images\\{{:resultImage}}" alt="{{:resultImageAlt}}" class="quiz-result-image">
<div class="quiz-result-factoid">
  <p>{{:resultFactoid}}</p>
  <p><a href="{{:resultURL}}" target=_blank class="factoid-source">Source</a></p>
</div>
<button class="{{:nextQuestionButtonClass}}">{{:nextQuestionButtonText}}</button>
`);
