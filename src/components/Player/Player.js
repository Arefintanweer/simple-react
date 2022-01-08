import React from 'react';
import './player.css';
const Player = (props) => {
    const {name, image, salary} = props.player;
    const handleClick = props.handleClick;
    return (
        <div className="player">
                <img src={image} alt="" />
                <h4>{name}</h4>
                <p><small> <b>Price : {salary}</b></small></p>
                <button className="button-38" onClick={()=>handleClick(props.player)}>Select Player</button>
        </div> 
        
        

        
    );
};

export default Player;