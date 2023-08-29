import { useState, useEffect } from 'react'
import Card from './components/Card'
import Scoreboard from './components/Scoreboard';

export default function App() {
  const [cards, setCards] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  useEffect(() => {
    fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=u6P77H4ue0rpTU0erPB5dOx4k7Dfc1Zg&limit=9')
    .then(response => response.json())
    .then((data) => {
      const imagesData = [];
      data.data.forEach(image =>
        imagesData.push(
          {
            id: image.id, 
            url: image.images.original_still.url
          }
        ));
      setCards(imagesData);
    }
    );
  }, []);

  const shuffleCards = () => {
    setCards(cards.sort(() => Math.random() - 0.5))
  }

  const incrementScore = () => {
    if (score == 9) return; 
    setScore(score + 1);
  }

  const handleClick = (e) => {
    const status = e.target.dataset.selected;

    if (status == 'true') {
      handleLose(e);
    } else {
      e.target.dataset.selected = "true";
      incrementScore();
    }
    shuffleCards();
  }

  const handleLose = () => {
    setScore(0);
  }

  if (score > highScore) setHighScore(score);

  return (
    <>
      <h1>Memory Card Game</h1>

      <Scoreboard score={score} highScore={highScore}/>

      <div className="card-container">
        {cards.map(card => 
          <Card 
            key={card.id} 
            id={card.id} 
            src={card.url} 
            selected={false} 
            onClick={handleClick} />
  )}
      </div>
    </>
  )
}
