import React from 'react';

import { range } from '../../utils'

function Guess({ guess }) {
  const guessRange = range(0, 5)

  return (
    <p className="guess">
      {guessRange.map(index => {
        return (
          <span key={index} className="cell">{guess.value[index]}</span>
        )
      })}
    </p>
  )
}

export default Guess;
