class QuizData {
  constructor(numQuestions = 10) {
    this.numQuestions = numQuestions;
    this.questionBank = new QuestionBank(this.numQuestions);
    this.currentScore = 0;
    this.possibleScore = 0;
    this.currentQuestionNum = 1;
  }

  isLastQuestion() {
    if(this.currentQuestionNum === this.numQuestions) {
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

  advanceQuestionPointer() {
    this.questionBank.nextQuestion();
    this.currentQuestionNum++;
  }

  lazyGetTemplate(name) {
    // If the named remote template is not yet loaded and compiled
    // as a named template, fetch it. In either case, return a promise
    // (already resolved, if the template has already been loaded)
    var deferred = $.Deferred();
    if ($.templates[name]) {
      deferred.resolve();
    } else {
      $.getScript(
        "../views/"
                + name + ".js")
        .then(function() {
          if ($.templates[name]) {
            deferred.resolve();
          } else {
            alert("Script: \"" + name + ".js\" failed to load");
            deferred.reject();
          }
        });
    }
    return deferred.promise();
  }

  startPage() {
    const headerData = [
      {headline: "Are you the Ultimate Potterhead?"}
    ];
    const mainData = [
      {buttonText: "Start Quiz!"}
    ];
    $.when(
      this.lazyGetTemplate("startHeader"),
      this.lazyGetTemplate("startMain")
    )
    .done(function() {
      const headerHTML = $.templates.startHeader.render(headerData);
      const mainHTML = $.templates.startMain.render(mainData);

      $("header").html(headerHTML);
      $("main").html(mainHTML);
    });
    console.log("startPage ran");
  }

  quizPage() {
    const data = {
      currentScore: this.currentScore,
      possibleScore: this.possibleScore,
      currentQuestionNum: this.currentQuestionNum,
      numQuestions: this.numQuestions
    };
    $.when(this.lazyGetTemplate("quiz")).done(function() {
      console.log(data);
      const htmlOutput = $.templates.quiz.render(data);
      $("header").html(htmlOutput);
    });
  }

  renderQuestion() {
    console.log("render question running");
    const possOptions = this.questionBank.getPossibleAnswers();
    const options = [];
    for (let i in possOptions) {
      options.push({option: possOptions[i]});
    };
    console.log(options);
    const data = {
      questionText: this.questionBank.getQuestionText(),
      questionOptions: options
    };

    $.when(this.lazyGetTemplate("question")).done(function() {
      const htmlOutput = $.templates.question.render(data);
      $("main").html(htmlOutput);
    });
  }

  renderAnswer(selected) {
    console.log("render answer running");
    const result = this.checkAnswer(selected);
    this.updateScore(result);
    this.quizPage();
    let data = {
      resultImage: this.questionBank.getAnswerImage(),
      resultImageAlt: this.questionBank.getAnswerImageAlt(),
      resultFactoid: this.questionBank.getAnswerFactoid(),
      resultURL: this.questionBank.getAnswerUrl()
    };
    if(result) {
      data.resultAnswer = "You're right!";
    } else {
      data.resultAnswer = "Oh no!  The correct answer is " + this.questionBank.getCorrectAnswer() + " !";
    }
    if(this.isLastQuestion()) {
      data.nextQuestionButtonClass = "js-quiz-view-final";
      data.nextQuestionButtonText = "View Results";
    } else {
      data.nextQuestionButtonClass = "js-quiz-next-question";
      data.nextQuestionButtonText = "Next Question";
    }

    $.when(this.lazyGetTemplate("answer")).done(function() {
      const htmlOutput = $.templates.answer.render(data);
      $("main").html(htmlOutput);
    });
  }

  renderFinal() {
    const data = {
      totalScore: this.currentScore,
      potentialScore: this.possibleScore
    };
    if(this.currentScore === this.possibleScore) {
      data.finalResults = "You ARE the Ultimate Potterhead!";
      data.finalResultText = "Well done!  You may go to the head of the class!";
      data.startNewButtonText = "Start New Quiz!";
    } else if(this.possibleScore - this.currentScore <= 3) {
      data.finalResults = "You ARE NOT the Ultimate Potterhead.";
      data.finalResultText = "But you're so close!  Study up, and try again!";
      data.startNewButtonText = "Try Again!";
    } else {
      data.finalResults = "Did you even study?";
      data.finalResultText = "Hermione would be very disappointed in you!";
      data.startNewButtonText = "Try Again!";
    }
    $.when(
      this.lazyGetTemplate("finalHeader"),
      this.lazyGetTemplate("finalMain")
    )
    .done(function() {
      const headerHTML = $.templates.finalHeader.render(data);
      const mainHTML = $.templates.finalMain.render(data);
      $("header").html(headerHTML);
      $("main").html(mainHTML);
    });
  }
}
