import React from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import Guesses from '../Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [currentPosition, setCurrentPosition] = React.useState(0)
  const [guessList, setGuessList] = React.useState([
    { id: crypto.randomUUID(), value: '' },
    { id: crypto.randomUUID(), value: '' },
    { id: crypto.randomUUID(), value: '' },
    { id: crypto.randomUUID(), value: '' },
    { id: crypto.randomUUID(), value: '' },
    { id: crypto.randomUUID(), value: '' },
  ])

  function handleNewGuess(guess) {
    if ((currentPosition + 1) > NUM_OF_GUESSES_ALLOWED) {
      return
    }

    setGuessList(state => state.map((currentGuess, index) => {
      if (currentPosition === index) {
        return guess
      }

      return currentGuess
    }))

    setCurrentPosition(state => state + 1)
  }

  return (
    <>
      <Guesses guessList={guessList} answer={answer} />

      <GuessInput onGuess={guess => handleNewGuess(guess)} />
    </>
  )
}

export default Game;
