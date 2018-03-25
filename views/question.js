$.templates('question', `
<form action='#' class='quiz-container'>
  <div class='question-container'>
    <div class='quiz-question'>
      {{:questionText}}
    </div>
  </div>
  <div class='quiz-options-container'>
    {{for questionOptions}}
      <button class='js-quiz-option'>{{:option}}</button>
    {{/for}}
  </div>
</form>
`);
