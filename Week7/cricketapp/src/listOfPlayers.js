import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      {players.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
