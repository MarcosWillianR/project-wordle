import React from 'react';

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess: guessValue })
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guessValue}
        onChange={e => setGuessValue(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput;
