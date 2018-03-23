class Quiz {
  constructor(numQuestions = 10) {
    this.numQuestions = numQuestions;
    this.questionBank = new QuestionBank(this.numQuestions);
    this.currentQuestion = this.questionBank.getQuestion();
    this.currentScore = 0;
    this.possibleScore = 0;
    this.currentQuestionNum = 1;
  }

  hasMoreQuestions() {
    if(this.currentQuestionNum >= this.numQuestions) {
      return true;
    }
    return false;
  }

  isLastQuestion() {
    if(this.currentQuestionNum = this.numQuestions) {
      return true;
    }
    return false;
  }

  checkAnswer(answer) {
    if(!answer) {
      throw "You must provide an answer to check!";
    } else {
      if(answer === this.questionBank.getCorrectAnswer()) {
        return true;
      }
      return false;
    }
  }

  updateScore(correct) {
    this.possibleScore++;
    if(correct) {
      this.currentScore++;
    }
  }
}
