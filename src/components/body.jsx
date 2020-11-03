import React from 'react';
import '../css/body.css'

const Body = (props) => {

    
    return ( 
        <main>
            {props.cards.map((itemCard) => (
                <div key={itemCard.id}>{itemCard.card}</div>
            ))}
        </main>
     );
}
 
export default Body;