import React from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import Banner from '../Banner';

const defaultGuessList = [
  { id: crypto.randomUUID(), value: '' },
  { id: crypto.randomUUID(), value: '' },
  { id: crypto.randomUUID(), value: '' },
  { id: crypto.randomUUID(), value: '' },
  { id: crypto.randomUUID(), value: '' },
  { id: crypto.randomUUID(), value: '' },
]

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [currentGuessesAmount, setCurrentGuessesAmount] = React.useState(0)
  const [gameStatus, setGameStatus] = React.useState('running') // running, won, lost
  const [guessList, setGuessList] = React.useState(defaultGuessList)

  console.log({ answer })

  function handleRestartGame() {
    setAnswer(sample(WORDS))
    setCurrentGuessesAmount(0)
    setGameStatus('running')
    setGuessList(defaultGuessList)
  }

  function handleVerifyEndgame(tentativeGuess) {
    if (tentativeGuess.value === answer) {
      setGameStatus('won')
    } else if ((currentGuessesAmount + 1) === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  function handleNewTentativeGuess(tentativeGuess) {
    setGuessList(state => state.map((currentGuess, index) => {
      if (currentGuessesAmount === index) {
        return tentativeGuess
      }

      return currentGuess
    }))

    const newGuessessAmount = currentGuessesAmount + 1
    setCurrentGuessesAmount(newGuessessAmount)

    handleVerifyEndgame(tentativeGuess)
  }

  return (
    <>
      <Guesses 
        guessList={guessList} 
        answer={answer}
      />

      <GuessInput 
        handleSubmitGuess={tentativeGuess => handleNewTentativeGuess(tentativeGuess)}
        gameStatus={gameStatus}
      />

      {gameStatus === 'won' && (
        <Banner status="happy">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {currentGuessesAmount === 1 ? '1 guess' : `${currentGuessesAmount} guesses`}
            </strong>.
          </p>
          <button className="restart-game-btn" onClick={handleRestartGame}>Restart game</button>
        </Banner>
      )}

      {gameStatus === 'lost' && (
        <Banner status="sad">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <button className="restart-game-btn" onClick={handleRestartGame}>Restart game</button>
        </Banner>
      )}
    </>
  )
}

export default Game;