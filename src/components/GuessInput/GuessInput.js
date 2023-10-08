import React from 'react'

function GuessInput({ onGuess }) {
  const [guessValue, setGuessValue] = React.useState('')

  return (
    <form 
      onSubmit={event => {
        event.preventDefault()
        onGuess({
          id: crypto.randomUUID(),
          value: guessValue
        })
        setGuessValue('')
      }} 
      className="guess-input-wrapper"
    >
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
