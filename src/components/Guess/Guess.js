import React from 'react';

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return (
    <span className={className}>
      {letter}
    </span>
  )
}

function Guess({ data, answer }) {
  const guessRange = range(0, 5)
  const guessLettersChecked = checkGuess(data.value, answer)

  return (
    <p className="guess">
      {guessRange.map(guessRangeIndex => {
        if (data.value) {
          const sameLetter = (letter) => letter === data.value[guessRangeIndex]
          const sameLetterIndex = (letterIndex) => letterIndex === guessRangeIndex 
          const currentLetter = 
            guessLettersChecked.find(({ letter }, letterCheckedIndex) => 
              sameLetter(letter) && 
              sameLetterIndex(letterCheckedIndex)
            )
          
          return (
            <Cell 
              key={guessRangeIndex} 
              letter={data.value[guessRangeIndex]}
              status={currentLetter.status}
            />
          )
        }

        return (
          <Cell 
            key={guessRangeIndex} 
            letter={undefined}
            status={undefined}
          />
        )
      })}
    </p>
  )
}

export default Guess;