import React from 'react';

const EvenPlayers = ({ IndianTeam }) => {
  const evenPlayers = IndianTeam.filter((_, index) => index % 2 !== 0);
  return (
    <div>
      {evenPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default EvenPlayers;
