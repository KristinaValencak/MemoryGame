import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card';
import GameOver from './components/GameOver';

const App = () => {

  let arrayOfImages = [
    {
      num:1, 
      img:"https://imgs.search.brave.com/nVPt_FFadeuDJOhgRslHnSesRik1gq8k3ePPgMMt0tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw", 
      isMatch:false
      }, 
      
    {
      num:2, 
      img:"https://imgs.search.brave.com/oYnohIr9csUlXGjWLMrXm8TEatysRVOj5kJjr84L8I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzI4LzQ5LzUw/LzM2MF9GXzExMjg0/OTUwMjdfNG9yT2Ju/ZzBvcFVhaVBtNWV5/dlk4VFBJSXk3aldL/V2YuanBn",
      isMatch:false
      },
      
    {
      num:3, 
      img: "https://imgs.search.brave.com/6bxAscSEWZrU7xX5mPEkCfTorgZYQoOSrnJJb_3ECcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI2/MjEzNTcxL3Bob3Rv/L2JhYnktYnVubnku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWlpaDZxOWpNeWNt/WUVBTVlZMGExZ1k4/TVpuQnNqT014YVI3/MndIaV9pNE09",
      isMatch:false
    },

    {
      num:4, 
      img: "https://imgs.search.brave.com/_6zWXD1QfRzcu5ZXDXcm6IJNO_Wyhk8YSvlyFBBzKio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMy/MTUzNzcvcGhvdG8v/bGlvbi1wYW50aGVy/YS1sZW8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW9ELXRs/ZjlZLTBIMU5kQ2Zq/UUF0ZGxsWW1GTXlJ/Rm5HRm84TU84SEYx/WFU9",
      isMatch:false
    },
    {
      num:5,
      img:"https://imgs.search.brave.com/nH6CZgD4BF9JITVlQzwgwGfY4T1HdfAXYEkU8mZzoa0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzA2Lzc4LzA3/LzM2MF9GXzYwNjc4/MDcwM19SeVVKbzZw/aE5LYVR2cFNFc1M3/UUhwcFJKTmpSNEN6/dy5qcGc",
      isMatch:false
    },
    {
      num:6,
      img: "https://imgs.search.brave.com/leKVk83cWWJMWyfWikpTCNm3IFySD6quiN4q1MrEEPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTk2NDQzL3Bob3Rv/L2dpYW50LXBhbmRh/LWFpbHVyb3BvZGEt/bWVsYW5vbGV1Y2Eu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXR0VXp0YTFKcXFK/UUEzckNRWHpKS1J6/eS03eVdUT09Qc2Vn/YkdoNnZoZ0E9",
      isMatch:false
    },

];

const [cards, setCards] =useState([]);
const [selectedCards, setSelectedCards] = useState([]);
const[score, setScore] = useState(0);
const [tries, setTries] = useState(0);
const [gameOver, setGameOver] = useState(false);

const shuffleImages = () => {
  let shuffledArray = [...arrayOfImages, ...arrayOfImages]
    .map((item, index) => ({ ...item, id: index + 1 }))
    .sort(() => 0.5 - Math.random()); 
setScore(0)

  setCards(shuffledArray);
};

//console.log(cards);

useEffect(()=> {
  shuffleImages();
}, []);

useEffect(()=> {
  console.log(selectedCards);
  if(selectedCards.length === 2) {
    setTimeout(()=> {
      setSelectedCards([]);
    }, 1000);
    
    checkMatch()
  }
}, [selectedCards]);


const checkMatch = () => {
  if (selectedCards[0].num === selectedCards[1].num) {
   // console.log("Yay!")
   setScore((prev) => prev +1)
   let updatedCards = cards.map((card) => {
    if (card.num === selectedCards[0].num) {
      return {
        ...card,
        isMatch:true
      };
    }
    return card
   });
   setCards(updatedCards);

  } else {
    //console.log("Don`t match!")
    setTries((prev) =>prev+1);
  }
};
//console.log(cards)

//restart game
useEffect(()=> {
  if(score === arrayOfImages.length) {
    console.log("Game over!");
    setTimeout(()=> {
      shuffleImages();
      setGameOver(true);
    }, 1000)
    
  }
}, [score, shuffleImages]);

  return (
    <>
    {gameOver && <GameOver setTries={setTries} tries={tries} setGameOver={setGameOver}/>}
    <div className='container'>
      <div className="score-container">
        <div className="score">Score: {score}</div>
        <div className="tries">Tries: {tries}</div>
      </div>
      <div className='cards-container'>
        {cards.map((card)=>(
          <Card key={card.id} card ={card} 
          setSelectedCards = {setSelectedCards}
          selectedCards = {selectedCards}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
