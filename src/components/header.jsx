import React from 'react';
import '../css/header.css';

const Header = (props) => {
    return ( 
    <header>
        <div id='head-div'>
            <h1>FOOD MEMORY CARD GAME</h1>
            <div id='score-box'>
                <div>SCORE: 0</div>
                <div>HIGH SCORE: 0</div>
            </div>
        </div>
    </header> 
    );
}
 
export default Header;