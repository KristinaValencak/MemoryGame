import React from 'react'

const GameOver = ({tries, setGameOver, setTries}) => {
    const handleClick = ()=> {
        setGameOver(false);
        setTries(0);
    }
  return (
    <div className='game-over'>
        <div className="box">
        <div className="tries">Game over after {tries} tries</div>
        <button onClick={handleClick}>Play Again</button>
        </div>
        
      
    </div>
  )
}

export default GameOver
