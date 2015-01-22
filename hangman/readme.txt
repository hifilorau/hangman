if ( correct === false) {
        triesRemaining = --triesRemaining;
      }

      finalDisplay = dashedWord.join(' ');
      document.querySelector('.hidden-word').textContent = finalDisplay;
      document.querySelector('.remaining-guesses').textContent = triesMessage;
