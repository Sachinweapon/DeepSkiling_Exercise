import React from 'react';

const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default ListofIndianPlayers;
