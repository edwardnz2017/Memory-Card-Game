import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import cake from './css/images/cake.png';
import cheese from './css/images/cheese.png';
import fish from './css/images/fish.png';
import hamburger from './css/images/hamburger.png';
import noodles from './css/images/noodles.png';
import pancakes from './css/images/pancakes.png';
import pizza from './css/images/pizza.png';
import strawberry from './css/images/strawberry.png';
import sushi from './css/images/sushi.png';
import taco from './css/images/taco.png';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clicked, setClicked] = useState({});
  let [cards, setCards] = useState([
    {
      id: 1,
      name: 'cake',
      card: (
        <div className='itemCard'>
          <img src={cake} alt='cake' />
          <div>CAKE</div>
        </div>
      ),
    },
    {
      id: 2,
      name: 'cheese',
      card: (
        <div className='itemCard'>
          <img src={cheese} alt='cheese' />
          <div>CHEESE</div>
        </div>
      ),
    },
    {
      id: 3,
      name: 'fish',
      card: (
        <div className='itemCard'>
          <img src={fish} alt='fish' />
          <div>FISH</div>
        </div>
      ),
    },
    {
      id: 4,
      name: 'hamburger',
      card: (
        <div className='itemCard'>
          <img src={hamburger} alt='hamburger' />
          <div>HAMBURGER</div>
        </div>
      ),
    },
    {
      id: 5,
      name: 'noodles',
      card: (
        <div className='itemCard'>
          <img src={noodles} alt='noodles' />
          <div>NOODLES</div>
        </div>
      ),
    },
    {
      id: 6,
      name: 'pancakes',
      card: (
        <div className='itemCard'>
          <img src={pancakes} alt='pancakes' />
          <div>PANCAKES</div>
        </div>
      ),
    },
    {
      id: 7,
      name: 'pizza',
      card: (
        <div className='itemCard'>
          <img src={pizza} alt='pizza' />
          <div>PIZZA</div>
        </div>
      ),
    },
    {
      id: 8,
      name: 'strawberry',
      card: (
        <div className='itemCard'>
          <img src={strawberry} alt='strawberry' />
          <div>STRAWBERRY</div>
        </div>
      ),
    },
    {
      id: 9,
      name: 'sushi',
      card: (
        <div className='itemCard'>
          <img src={sushi} alt='sushi' />
          <div>SUSHI</div>
        </div>
      ),
    },
    {
      id: 10,
      name: 'taco',
      card: (
        <div className='itemCard'>
          <img src={taco} alt='taco' />
          <div>TACO</div>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    shuffleCards(cards);
  });

  function shuffleCards(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let j = Math.floor(Math.random() * (len - (i + 1))) + (i + 1);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const addPoint = (cardName) => {
    if (cardName === 'cake') {
      if (clicked.cake) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, cake: true });
      }
    } else if (cardName === 'cheese') {
      if (clicked.cheese) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, cheese: true });
      }
    } else if (cardName === 'fish') {
      if (clicked.fish) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, fish: true });
      }
    } else if (cardName === 'hamburger') {
      if (clicked.hamburger) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, hamburger: true });
      }
    } else if (cardName === 'noodles') {
      if (clicked.noodles) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, noodles: true });
      }
    } else if (cardName === 'pancakes') {
      if (clicked.pancakes) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, pancakes: true });
      }
    } else if (cardName === 'pizza') {
      if (clicked.pizza) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, pizza: true });
      }
    } else if (cardName === 'strawberry') {
      if (clicked.strawberry) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, strawberry: true });
      }
    } else if (cardName === 'sushi') {
      if (clicked.sushi) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, sushi: true });
      }
    } else if (cardName === 'taco') {
      if (clicked.taco) {
        setScore(0);
        setClicked({});
      } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(highscore + 1);
        }
        setClicked({ ...clicked, taco: true });
      }
    }
  };

  return (
    <React.Fragment>
      <Header score={score} highscore={highscore} />
      <Body cards={cards} addPoints={addPoint} />
    </React.Fragment>
  );
}

export default App;
