// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var hangmanWords = [
"the","of","and","a","to","in","is","you","that","it","he",
"was","for","on","are","as","with","his","they","I","at","be",
"this","have","from","or","one","had","by","word","but","not",
"what","all","were","we","when","your","can","said","there",
"use","an","each","which","she","do","how","their","if","will",
"up","other","about","out","many","then","them","these","so",
"some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way",
"could","people","my","than","first","water","been","call",
"who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"
];

var incorrectResult = [];
var userLetter;
var validWords = hangmanWords.filter(getValid);
var gameWord = getWord();
var triesRemaining = 5;
var triesMessage = "You have " + triesRemaining + " tries until you fall into a firey inferno";
var textInput = document.getElementById("text-input");

var updateTries = function() {
  document.querySelector('.remaining-guesses').textContent = triesMessage;
}

updateTries();




function userGuess(guessValue) {
  userLetter = guessValue;
}


function getValid (word) {
  return word.length >= 3;
}



function getWord() {
  return validWords[Math.floor(Math.random() * validWords.length)];
}

// gameWord is the randomized answer //


console.log(gameWord);


var displayWord = gameWord.split('');

var dashedWord = displayWord.map(function (ch) {
  return "_";
});

var finalDisplay = dashedWord.join(' ');

var updateDisplay = function() {
  document.querySelector('.hidden-word').textContent = finalDisplay;
}

updateDisplay();

function checkLetter () {
  var correct = false;
    for (i = 0; i < gameWord.length; i++) {
      if (userLetter === displayWord[i]) {
        console.log("FIRE!");
        dashedWord[i] = userLetter;
        console.log("FIRE!");
        correct = true;
        textInput.value = "";
    }
  }
      if (correct === false) {
        triesRemaining = --triesRemaining;
        triesMessage = "You have " + triesRemaining + " tries until you fall into a firey inferno";
        updateTries();
        var incorrectLetter = userLetter;
        incorrectResult.push(incorrectLetter);
        document.querySelector('.incorrect-letters').textContent = incorrectResult;
        textInput.value = "";

      }

      finalDisplay = dashedWord.join(' ');
      updateDisplay();


}
