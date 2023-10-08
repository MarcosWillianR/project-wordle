import React from 'react'

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  return (
    <form 
      onSubmit={event => {
        event.preventDefault()
        handleSubmitGuess({
          id: crypto.randomUUID(),
          value: tentativeGuess
        })
        setTentativeGuess('')
      }} 
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={tentativeGuess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameStatus !== 'running'}
        onChange={e => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput;
