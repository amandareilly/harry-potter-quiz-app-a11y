$.templates("question", `
<form action="#" class="js-quiz-container">
  <div class="row js-quiz-question-container">
    <div class="col-12 js-quiz-question">
      {{:questionText}}
    </div>
  </div>
  <div class="row js-quiz-options-container">
    {{for questionOptions}}
      <button class="col-6 js-quiz-option">{{:option}}</button>
    {{/for}}
  </div>
</form>
`);
