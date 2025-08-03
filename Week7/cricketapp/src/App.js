import React from 'react';
import ListofPlayers from './listOfPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

function App() {
  const players = [
    { name: "Virat", score: 92 },
    { name: "Rohit", score: 81 },
    { name: "Rahul", score: 65 },
    { name: "Pant", score: 70 },
    { name: "Hardik", score: 45 },
    { name: "Jadeja", score: 73 },
    { name: "Ashwin", score: 56 },
    { name: "Bumrah", score: 60 },
    { name: "Shami", score: 48 },
    { name: "Gill", score: 84 },
    { name: "Surya", score: 90 }
  ];

  const IndianTeam = ["Virat", "Rohit", "Rahul", "Pant", "Hardik", "Jadeja"];

  const T20players = ["Surya", "Gill", "Iyer"];
  const RanjiTrophyPlayers = ["Rahane", "Pujara", "Saha"];
  const IndianPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>🏏List of Players</h1>
      <ListofPlayers players={players} />

      <hr />

      <h1>Players with Score Below 70</h1>
      <Scorebelow70 players={players} />

      <hr />

      <h1>Indian Team</h1>
      <h2>Odd Players</h2>
      <OddPlayers IndianTeam={IndianTeam} />

      <h2>Even Players</h2>
      <EvenPlayers IndianTeam={IndianTeam} />

      <hr />

      <h1>Merged Indian Players (T20 + Ranji)</h1>
      <ListofIndianPlayers IndianPlayers={IndianPlayers} />
    </div>
  );
}

export default App;
