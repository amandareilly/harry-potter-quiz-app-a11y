class QuestionBank {
  constructor(numQuestions = 10) {
    const questions = [
      {
        question: 'Many know that Gryffindor\'s ghost is Nearly Headless Nick.  But what is his full name?',
        answers: [
          'Sir Nicholas de Mimsy-Porpington',
          'Sir Nicholas Winton',
          'Nicholas Nickles',
          'Nicholas the Brave'
        ],
        correctAnswer: 'Sir Nicholas de Mimsy-Porpington',
        answerFactoid: 'Sir Nicholas de Mimsy-Porpington, known after his death as Nearly Headless Nick, was a wizard who attended Hogwarts School of Witchcraft and Wizardry and was Sorted into Gryffindor House. He was executed by an improper decapitation, after he had a magical mishap with Lady Grieve, in which he tried to straighten her teeth but it backfired and she grew tusks. Since then, he is the resident ghost of Gryffindor Tower at the Hogwarts Castle.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Nicholas_de_Mimsy-Porpington',
        answerImage: 'NickGryffindorTable.jpg',
        answerImageAlt: 'Nearly Headless Nick greets the Gryffindor students at the house table.'
      },
      {
        question: 'Monkshood and wolfsbane are the same plant, also known as what?',
        answers: [
          'Aconite',
          'Devil\'s Snare',
          'Shrivelfig',
          'Mimbulus Mimbletonia'
        ],
        correctAnswer: 'Aconite',
        answerFactoid: 'Aconite (also known as monkshood or wolfsbane) is a plant with magical properties. Once widespread, this plant is now only found in wild places. Its flowers are useful in potion-making, but its leaves are very toxic. Aconite is most commonly known as an ingredient of Wolfsbane Potion.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Aconite',
        answerImage: 'snape_teaching.jpg',
        answerImageAlt: 'Professor Snape teaches a potions class.'
      },
      {
        question: 'New students need to learn the secrets of the castle. How many staircases does Hogwarts have?',
        answers: [
          '142',
          '57',
          '12',
          '287'
        ],
        correctAnswer: '142',
        answerFactoid: 'Stairs at Hogwarts are not straightforward. The 142 staircases vary in shape, size and destination. There are wide ones, narrow ones, some with vanishing steps and others that lead somewhere different on a Friday. Not helpful when you’re trying to stick to a timetable.',
        answerUrl: 'https://www.pottermore.com/features/everything-a-first-year-should-know-about-hogwarts',
        answerImage: 'hogwarts_staircases.jpg',
        answerImageAlt: 'Image of Hogwarts\' moving staircases.'
      },
      {
        question: 'Which ingredient is NOT needed to make Polyjuice potion?',
        answers: [
          'Mandrake Root',
          'Leeches',
          'Powdered Bicorn Horn',
          'Knotgrass'
        ],
        correctAnswer: 'Mandrake Root',
        answerFactoid: 'Polyjuice Potion is a potion that allows the drinker to assume the form of someone else. It\'s a complicated and challenging potion that even adult witches and wizards struggle to brew correctly. The potion is incredibly advanced and has two separate parts that contain steps for each part, when brewing is complete the potion has to stew for a month before usage.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Polyjuice_Potion',
        answerImage: 'hermoine_polyjuice.jpg',
        answerImageAlt: 'Hermione brews Polyjuice Potion.'
      },
      {
        question: 'Quidditch players are constantly at risk of injury throughout the game. How many possible Quidditch fouls are there?',
        answers: [
          '700',
          '5987',
          '239',
          '1283'
        ],
        correctAnswer: '700',
        answerFactoid: 'There are seven hundred Quidditch fouls listed in the Department of Magical Games and Sports records, though the entire list has never been made public (it was the department\'s view that some wizards and witches "might get ideas"). 90% of these are banned anyway, by the rule concerning wand use against the opposing team (or rather, lack thereof).',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Quidditch',
        answerImage: 'quidditch.jpg',
        answerImageAlt: 'Harry and Draco play in a Quidditch match.'
      },
      {
        question: 'In "The Sorcerer’s Stone," Harry and his friends are awarded last-minute House Points, putting Gryffindor ahead of Slytherin by just 10 points. What was the final tally?',
        answers: [
          '482 to 472',
          '597 to 587',
          '282 to 272',
          '407 to 397'
        ],
        correctAnswer: '482 to 472',
        answerFactoid: 'Harry\'s first year at Hogwarts was the first time in seven years that Slytherin failed to win the house cup.  Gryffindor earned 482 points to Slytherin\'s 472.  Ravenclaw and Hufflepuff earned 426 and 352 points, respectively.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/1991%E2%80%931992_school_year',
        answerImage: 'house_cup.jpg',
        answerImageAlt: 'The Gryffindor table celebrates their House Cup win.'
      },
      {
        question: 'Ever the eccentric, Dumbledore claimed to have a scar above his left knee that is a perfect map of what?',
        answers: [
          'The London Underground',
          'The Canary Islands',
          'The Forest of Dean',
          'Diagon Alley'
        ],
        correctAnswer: 'The London Underground',
        answerFactoid: 'Dumbledore wore half-moon spectacles and a colorful array of robes, ranging from purple to crimson-red. He once claimed to have a scar above his left knee in the precise shape of a map of the London Underground, but whether or not he actually did is unknown. His demeanor was often — if not always — serene and ethereal, and he usually spoke in a calm, pleasant voice even when Harry thought that he was actually furious.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Albus_Dumbledore',
        answerImage: 'dumbledore.jpg',
        answerImageAlt: 'Albus Dumbledore'
      },
      {
        question: 'Where does Vernon Dursley work?',
        answers: [
          'Grunnings',
          'Grimmaulds',
          'Grayberry',
          'Ginterly'
        ],
        correctAnswer: 'Grunnings',
        answerFactoid: 'Vernon Dursley was a Muggle, husband of Petunia Evans, father of Dudley and uncle of Harry Potter by marriage.  He was a former student of Smeltings Academy and a director of the Grunnings drill manufacturing company.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Vernon_Dursley',
        answerImage: 'dursleys.jpg',
        answerImageAlt: 'Vernon and Petunia Dursley'
      },
      {
        question: 'For Harry\'s seventeenth birthday, what color did Hermione turn the leaves of the Weasley’s crabapple tree?',
        answers: [
          'Gold',
          'Silver',
          'Red',
          'Yellow'
        ],
        correctAnswer: 'Gold',
        answerFactoid: 'For a dinner in celebration of Harry\'s 17th birthday, Fred and George bewitched a number of purple lanterns with "17" on them to hang above the kitchen and Hermione conjured purple and gold streamers to be draped around the trees and bushes, and turned a crabapple tree to gold.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Harry_Potter%27s_seventeenth_birthday',
        answerImage: 'harry-birthday-cake.jpg',
        answerImageAlt: 'A cake given to Harry by Rubeus Hagrid on Harry\'s twelfth birthday'
      },
      {
        question: 'Cedric Diggory let Harry use the prefects\' bathroom in "The Goblet of Fire." What man\'s statue is next to the special lavatory?',
        answers: [
          'Boris the Bewildered',
          'Salazar Slytherin',
          'Wilfred the Wistful',
          'Lachlan the Lanky'
        ],
        correctAnswer: 'Boris the Bewildered',
        answerFactoid: 'The Prefects\' Bathroom is a special bathroom on the fifth floor of Hogwarts restricted to use by school Prefects, Head Boys, Head Girls and Quidditch captains. It is located on the fifth floor behind the fourth door to the left of a statue of Boris the Bewildered, which only opens when given the correct password.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Prefects%27_Bathroom',
        answerImage: 'harry_prefects_bathroom.jpg',
        answerImageAlt: 'Harry entering the Prefects\s bathroom to attempt to solve a puzzle during the Triwizard Tournament.'
      },
      {
        question: 'What is the stated speed of a Firebolt broomstick?',
        answers: [
          'at least 150 mph',
          'around 200 knots',
          'approximately 300 kph',
          'nearly 600 meters per second'
        ],
        correctAnswer: 'at least 150 mph',
        answerFactoid: 'The Firebolt is a world-class broomstick. It was the fastest at the time of its production, and was released in 1993. In time the Firebolt broomstick was used by the Bulgarian and Irish International Quidditch Teams. The teams played on Firebolts during the 1994 Quidditch World Cup.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Firebolt',
        answerImage: 'firebolt.jpg',
        answerImageAlt: 'Harry riding his Firebolt.'
      },
      {
        question: 'Harry first took the Knight Bus in "The Prisoner of Azkaban." How much does a hot chocolate on the Knight Bus cost?',
        answers: [
          '15 Sickles',
          '2 Knuts',
          'Half a Galleon',
          '50 cents'
        ],
        correctAnswer: '15 Sickles',
        answerFactoid: 'A Sickle or Silver-Sickle is a form of currency in the wizarding world that is made out of silver. One Sickle is equal to 29 Knuts, and 17 Sickles make up a Galleon.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Sickle',
        answerImage: 'potter_vault.jpg',
        answerImageAlt: 'Harry seeing the Gringotts vault he inherited from his parents (and all the money it contained), for the first time.'
      },
      {
        question: 'In the Hall of Prophecy there are rows and rows of glowing orbs. Which row contains the prophecy about Harry and Voldemort?',
        answers: [
          'Row 97',
          'Row 36',
          'Row 58',
          'Row 82'
        ],
        correctAnswer: 'Row 97',
        answerFactoid: 'The Hall of Prophecy is a chamber within the Department of Mysteries, on Level nine of the Ministry of Magic in London, England. It features shelves containing records of prophecies, though many of these records, if not all, were destroyed when part of a battle between Death Eaters and Dumbledore\'s Army members occurred in the Hall in 1996.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Hall_of_Prophecy',
        answerImage: 'prophecy.jpg',
        answerImageAlt: 'Harry holds the record of the prophecy about him and Voldemort.'
      },
      {
        question: 'In the Quidditch World Cup, which chaser scored the first goal for Ireland?',
        answers: [
          'Troy',
          'Mullet',
          'Moran',
          'Krum'
        ],
        correctAnswer: 'Troy',
        answerFactoid: 'The 422nd Quidditch World Cup final was held on 25 August, 1994 in England, between Ireland and Bulgaria. Ludovic Bagman provided the match commentary. Ireland wore green robes with each player\'s name embroidered in silver on their back. They all flew Firebolt broomsticks and Leprechauns served as the team\'s mascots. Veela were Bulgaria\'s mascots and they played in robes of scarlet.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/1994_Quidditch_World_Cup',
        answerImage: 'quidditch_ireland.jpg',
        answerImageAlt: 'The Irish Quidditch team makes their appearance at the final game of the 1994 Quidditch World Cup.'
      },
      {
        question: 'On the wall across from the Room of Requirement, there is a tapestry showing a wizard trying to teach trolls ballet. What\'s his name?',
        answers: [
          'Barnabus the Barmy',
          'Wilfred the Wistful',
          'Lachlan the Lanky',
          'Boris the Bewildered'
        ],
        correctAnswer: 'Barnabus the Barmy',
        answerFactoid: 'The Room of Requirement is located on the seventh floor in the left corridor of the Hogwarts castle and has a hidden entrance opposite the tapestry depicting the attempt of Barnabas the Barmy to teach trolls ballet. The way to open the room is to walk past it three times thinking about what you need, and the door will appear.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Room_of_Requirement',
        answerImage: 'roomofrequirement.jpg',
        answerImageAlt: 'The Room of Requirement while in use as the hideout of students loyal to Harry while Hogwarts was under the control of Voldemort loyalists.'
      },
      {
        question: 'The visitor’s entrance to the Ministry of Magic is an abandoned red telephone booth in London. What is the five-digit code you must dial to get in?',
        answers: [
          '6-2-4-4-2',
          '5-6-6-2-5',
          '3-8-9-4-3',
          '2-1-1-9-7'
        ],
        correctAnswer: '6-2-4-4-2',
        answerFactoid: 'The Ministry of Magic uses a telephone booth as the visitor\'s entrance. The booth transports visitors from ground level to the Atrium on floor B8. To activate the entrance, one dials 62442 (spelling "magic") on the telephone.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Telephone_booth',
        answerImage: 'phone_booth.jpg',
        answerImageAlt: 'The old style London phone booth that serves as the visitor\'s entrance to the Ministry of Magic'
      },
      {
        question: 'Voldemort stole Helga Hufflepuff\'s cup from an old woman named Hepzibah Smith.  What was the name of her house-elf?',
        answers: [
          'Hokey',
          'Winky',
          'Dobby',
          'Kreacher'
        ],
        correctAnswer: 'Hokey',
        answerFactoid: 'After Hepzibah\'s death, Hokey was accused of poisoning her mistress\'s evening cocoa. However, it was actually Tom Riddle who poisoned Hepzibah (in order to steal Helga Hufflepuff\'s Cup and Salazar Slytherin\'s Locket).',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Hokey',
        answerImage: 'hokey.jpg',
        answerImageAlt: 'A newspaper clipping showing a picture of the house-elf Hokey.'
      },
      {
        question: 'Ginny Weasley bought a pet Pygmy Puff from her older brothers\' joke shop.  What did she name it?',
        answers: [
          'Arnold',
          'Florean',
          'Gilderoy',
          'Elphias'
        ],
        correctAnswer: 'Arnold',
        answerFactoid: 'The Puffskein is easy to care for, and they emit a low humming sound when they are content. A group of Puffskeins or Pygmy Puffs is referred to as a poffle. Shaved (or trimmed with a clipper) Puffskein hair has magical properties, and is useful as a potion ingredient, such as in Zygmunt Budge\'s variation of the Laughing Potion which requires a few handfuls.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Puffskein',
        answerImage: 'ginnypygmypuff.jpg',
        answerImageAlt: 'Ginny Weasley speaks with Luna Lovegood while her pygmy puff Arnold rests on her shoulder.'
      },
      {
        question: 'What is Fred Weasley\'s chosen code name on Potterwatch, the secretive radio program set up by the Order of the Phoenix?',
        answers: [
          'Rapier',
          'River',
          'Royal',
          'Romulus'
        ],
        correctAnswer: 'Rapier',
        answerFactoid: 'Potterwatch was a pirate radio program hosted by Lee Jordan for those who rebelled against Lord Voldemort and supported Harry Potter during the height of the Second Wizarding War. Each contributor to the show used a codename while on air to protect their identity, but those who knew the individuals could generally tell who was speaking. Every known codename starts with the letter \'R\'.',
        answerUrl: 'http://harrypotter.wikia.com/wiki/Potterwatch',
        answerImage: 'fred_weasley.jpg',
        answerImageAlt: 'A photo of Fred Weasley.'
      }

    ];
    if (numQuestions > questions.length) {
      /**
       * Throw an error if too many questions requested.
       */
      throw `Not enough questions available.  Maximum ${questions.length} questions.`;
    }
    else {
      shuffleArray(questions);
      this.questions = questions.slice(0, numQuestions);
      this.currentQuestion = this.questions.pop();
      shuffleArray(this.currentQuestion.answers);
    }
  }

  nextQuestion() {
    this.currentQuestion = this.questions.pop();
    shuffleArray(this.currentQuestion.answers);
  }

  getQuestionText() {
    return this.currentQuestion.question;
  }

  getPossibleAnswers() {
    return this.currentQuestion.answers;
  }

  getCorrectAnswer() {
    return this.currentQuestion.correctAnswer;
  }

  getAnswerFactoid() {
    return this.currentQuestion.answerFactoid;
  }

  getAnswerUrl() {
    return this.currentQuestion.answerUrl;
  }

  getAnswerImage() {
    return this.currentQuestion.answerImage;
  }

  getAnswerImageAlt() {
    return this.currentQuestion.answerImageAlt;
  }

}
