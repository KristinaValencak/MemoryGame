import React, { useEffect, useState } from 'react'


const Card = ({card, setSelectedCards, selectedCards}) => {
  const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        //console.log('clicked!')
        setSelectedCards([...selectedCards, card]);
    }

    useEffect(()=> {
      if(
        selectedCards[0] === card || 
        selectedCards[1] === card || 
        card.isMatch
      ) {
        setIsFlipped(true)
      } else {
        setIsFlipped(false)
      }
    }, [selectedCards]);
  return (
    <div className={isFlipped?"card open stop-clicking" : "card"} onClick={handleClick}>
        <div className="front">
            <img src={card.img} alt="" />
        </div>
      <div className="back">

      </div>
    </div>
  )
}

export default Card
