import React from 'react';

const OddPlayers = ({ IndianTeam }) => {
  const oddPlayers = IndianTeam.filter((_, index) => index % 2 === 0);
  return (
    <div>
      {oddPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default OddPlayers;
