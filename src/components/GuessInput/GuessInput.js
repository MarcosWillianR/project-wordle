import React from 'react'

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    console.log({ guess: guessValue })
    setGuessValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guessValue}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={e => setGuessValue(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput;
