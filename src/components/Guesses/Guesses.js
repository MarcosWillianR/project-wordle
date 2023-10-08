import React from 'react'

import Guess from '../Guess'

function Guesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => {
        return (
          <Guess key={guess.id} guess={guess} />
        )
      })}
    </div>
  )
}

export default Guesses;
