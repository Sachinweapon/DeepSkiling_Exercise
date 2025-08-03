import React from 'react';

const Scorebelow70 = ({ players }) => {
  const lowScorers = players.filter(p => p.score < 70);
  return (
    <div>
      {lowScorers.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
};

export default Scorebelow70;
