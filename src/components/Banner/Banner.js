import React from 'react';

function Banner({ guesses, answer, isWinner, onRestartGame }) {
  const restartButton = (
    <button className="restart-game-btn" onClick={onRestartGame}>Restart game</button>
  )

  return (
    <>
      {isWinner ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses} guesses</strong>.
          </p>
          {restartButton}
        </div>
      ) : (
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          {restartButton}
        </div>
      )}
    </>
  )
}

export default Banner;
