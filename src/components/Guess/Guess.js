import React from 'react';

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const guessRange = range(0, 5)
  const guessLettersChecked = checkGuess(guess.value, answer)

  return (
    <p className="guess">
      {guessRange.map(index => {
        if (guess.value) {
          const currentLetter = 
            guessLettersChecked.find(({ letter }) => letter === guess.value[index])
          
          return (
            <span key={index} className={`cell ${currentLetter.status}`}>
              {guess.value[index]}
            </span>
          )
        }

        return (
          <span key={index} className="cell"></span>
        )
      })}
    </p>
  )
}

export default Guess;

// [
//   { letter: 'W', status: 'incorrect' },
//   { letter: 'H', status: 'incorrect' },
//   { letter: 'A', status: 'correct' },
//   { letter: 'L', status: 'misplaced' },
//   { letter: 'E', status: 'misplaced' },
// ]

<p class="guess">
  <span class="cell incorrect">W</span>
  <span class="cell incorrect">H</span>
  <span class="cell correct">A</span>
  <span class="cell misplaced">L</span>
  <span class="cell misplaced">E</span>
</p>