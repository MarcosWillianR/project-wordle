import React from 'react';

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const guessRange = range(0, 5)
  const guessLettersChecked = checkGuess(guess.value, answer)

  return (
    <p className="guess">
      {guessRange.map(guessRangeIndex => {
        if (guess.value) {
          const currentLetter = 
            guessLettersChecked.find(({ letter }, lettersCheckedIndex) => 
              letter === guess.value[guessRangeIndex] && 
              guessRangeIndex === lettersCheckedIndex
            )
          
          return (
            <span key={guessRangeIndex} className={`cell ${currentLetter.status}`}>
              {guess.value[guessRangeIndex]}
            </span>
          )
        }

        return (
          <span key={guessRangeIndex} className="cell"></span>
        )
      })}
    </p>
  )
}

export default Guess;