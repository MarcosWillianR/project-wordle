import React from 'react';

import { sample } from '../../utils';
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
  const [isWinner, setIsWinner] = React.useState(false)
  const [isEndgame, setIsEndgame] = React.useState(false)
  const [guessList, setGuessList] = React.useState(defaultGuessList)

  console.log({ answer })

  function handleRestartGame() {
    setAnswer(sample(WORDS))
    setCurrentGuessesAmount(0)
    setIsWinner(false)
    setIsEndgame(false)
    setGuessList(defaultGuessList)
  }

  function handleVerifyEndgame(guess) {
    if (guess.value === answer) {
      setIsWinner(true)
      setIsEndgame(true)
      return
    }

    if ((currentGuessesAmount + 1) === 6) {
      setIsWinner(false)
      setIsEndgame(true)
      return
    }
  }

  function handleNewGuess(guess) {
    setGuessList(state => state.map((currentGuess, index) => {
      if (currentGuessesAmount === index) {
        return guess
      }

      return currentGuess
    }))

    const newGuessessAmount = currentGuessesAmount + 1
    setCurrentGuessesAmount(newGuessessAmount)

    handleVerifyEndgame(guess)
  }

  return (
    <>
      <Guesses 
        guessList={guessList} 
        answer={answer}
      />

      <GuessInput 
        onGuess={guess => handleNewGuess(guess)}
        isEndgame={isEndgame}
      />

      {isEndgame && (
        <Banner 
          guesses={currentGuessesAmount}
          answer={answer} 
          isWinner={isWinner}
          onRestartGame={handleRestartGame}
        />
      )}
    </>
  )
}

export default Game;
