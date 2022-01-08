import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Team from './components/Team/Team';
import playersData from './data/data.json';
function App() {
  const [players,setPlayers] = useState([]);
  let [playerCount, setPlayerCount] = useState(0);
  let [teamData, setteamData] = useState([]);

  useEffect(()=>{
    setPlayers(playersData);
  },[])

  function handleClick(player){
    //console.log(player);
    const newPlayerCount = playerCount + 1;
    setPlayerCount(newPlayerCount);
    const newPlayer = [...teamData, player];
    setteamData(newPlayer);
    //console.log(passData);
  }
  function handlepickAgain(){
    setPlayerCount(0);
    setteamData([]);
  }
  
  return (
    <div className="container">
      <div className="player-info">
        {
          players.map(player => <Player player={player} handleClick={handleClick} key={player.id}></Player> )
        }
      </div>
      <div className="team-info">
          <Team  teamData= {teamData} playerCount={playerCount} handlepickAgain= {handlepickAgain}key={teamData.code}></Team>
      </div>
      
    </div>
  );
}

export default App;
