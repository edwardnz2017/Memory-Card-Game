import React from 'react';
import '../css/body.css'

const Body = (props) => {

    
    return ( 
        <main>
            {props.cards.map((itemCard) => (
                <div key={itemCard.id} onClick={() => props.addPoints(itemCard.name)} >{itemCard.card}</div>
            ))}
        </main>
     );
}
 
export default Body;