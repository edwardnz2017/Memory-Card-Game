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
  const [cards, setCards] = useState([
    {
      id: 1,
      card: (
        <div className='itemCard'>
          <img src={cake} alt='cake' />
          <div>CAKE</div>
        </div>
      ),
    },
    {
      id: 2,
      card: (
        <div className='itemCard'>
          <img src={cheese} alt='cheese' />
          <div>CHEESE</div>
        </div>
      ),
    },
    {
      id: 3,
      card: (
        <div className='itemCard'>
          <img src={fish} alt='fish' />
          <div>FISH</div>
        </div>
      ),
    },
    {
      id: 4,
      card: (
        <div className='itemCard'>
          <img src={hamburger} alt='hamburger' />
          <div>HAMBURGER</div>
        </div>
      ),
    },
    {
      id: 5,
      card: (
        <div className='itemCard'>
          <img src={noodles} alt='noodles' />
          <div>NOODLES</div>
        </div>
      ),
    },
    {
      id: 6,
      card: (
        <div className='itemCard'>
          <img src={pancakes} alt='pancakes' />
          <div>PANCAKES</div>
        </div>
      ),
    },
    {
      id: 7,
      card: (
        <div className='itemCard'>
          <img src={pizza} alt='pizza' />
          <div>PIZZA</div>
        </div>
      ),
    },
    {
      id: 8,
      card: (
        <div className='itemCard'>
          <img src={strawberry} alt='strawberry' />
          <div>STRAWBERRY</div>
        </div>
      ),
    },
    {
      id: 9,
      card: (
        <div className='itemCard'>
          <img src={sushi} alt='sushi' />
          <div>SUSHI</div>
        </div>
      ),
    },
    {
      id: 10,
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

  const shuffleCards = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    }

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

    return array;
  };

  return (
    <React.Fragment>
      <Header />
      <Body cards={cards} />
    </React.Fragment>
  );
}

export default App;
