import { useState } from 'react';
import { guess, startGame, restart } from './axios'

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleGuess = async () => {
    console.log(number);
    const response = await guess(number);
    if (response === 'Equal') {
      setHasWon(true);
    } else {
      setStatus(response);
      setNumber('');
    }
    console.log(status);
  }

  const handleStart = () => {
    setHasStarted(true);
    const msg = startGame();
    console.log(msg);
  }

  const handleRestart = () => {
    setHasWon(false);
    setStatus('');
    const msg = restart();
    console.log(msg);
  }

  const startMenu = 
    <div>
      <button onClick={handleStart} > start game </button>
    </div>

  const game = 
    <>
      <p>Guess a number between 1 to 100</p>
      <input type='number' onChange={(e) => {
        setNumber(e.target.value);
      }}></input>
      <button 
        onClick={handleGuess}
        disabled={1 > number || number > 100}
      >guess!</button>
      <p>{status}</p>
    </>

  const winningMode = 
      <>
        <p>Yon won! The number was {number}. </p>
        <button onClick={handleRestart} >restart</button>
      </>

  return (
    <div className="App">
      {hasWon ? winningMode : (hasStarted ? game : startMenu)}
    </div>
  );
}

export default App;