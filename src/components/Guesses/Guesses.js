import React from 'react'

import Guess from '../Guess'

function Guesses({ guessList, answer }) {
  return (
    <div className="guess-results">
      {guessList.map((data) => {
        return (
          <Guess key={data.id} data={data} answer={answer} />
        )
      })}
    </div>
  )
}

export default Guesses;
