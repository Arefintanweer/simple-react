import React from 'react';
import './Team.css';

const Team = (props) => {
    const playerCount = props.playerCount;
    const handlepickAgain = props.handlepickAgain;
    const data = props.teamData;
    let salary = data.map(player => (+player.salary));
    const sum = salary.reduce((acc, curr)=>{
        return Number.parseInt(acc + curr);
    },0)
    console.log(sum);
    
    return (
        <div className="team-calc">
            <h4>You Have Selected : {playerCount} players</h4>
            {
                <ul>
                    <li>{data.map(x => <p><em>{x.name}</em></p>)}</li>
                </ul>
            }
            <h4>Total Amount to Buy Your Team is {sum}$ </h4>
            <button className = "button-50" onClick={()=> handlepickAgain()}>Pick Again</button>
        </div>
    );
};

export default Team;