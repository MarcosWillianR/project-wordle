import React from 'react'

import Guess from '../Guess'

function Guesses({ guessList, answer }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => {
        return (
          <Guess key={guess.id} guess={guess} answer={answer} />
        )
      })}
    </div>
  )
}

export default Guesses;
