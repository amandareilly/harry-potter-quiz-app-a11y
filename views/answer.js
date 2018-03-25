$.templates("answer", `
<div class="row js-quiz-result-container">
  <div class="col-12">
    <h3 class="js-quiz-result-text">{{:resultAnswer}}</h3>
  </div>
  <div class="col-6 js-quiz-result-image-container">
    <img src="images\\{{:resultImage}}" alt="{{:resultImageAlt}}" class="js-quiz-result-image">
  </div>
  <div class="col-6 js-quiz-result-factoid">
    <div>
      <p>{{:resultFactoid}}</p>
      <p><a href="{{:resultURL}}" target=_blank class="factoid-source">Source</a></p>
    </div>
    <button class="{{:nextQuestionButtonClass}}">{{:nextQuestionButtonText}}</button>
  </div>
</div>`);
