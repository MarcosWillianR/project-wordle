import React from 'react';

function Guesses({ guessList }) {
  return (
    <div class="guess-results">
      {guessList.map(({ id, value }) => {
        return (
          <p key={id} class="guess">{value}</p>
        )
      })}
    </div>
  )
}

export default Guesses;
