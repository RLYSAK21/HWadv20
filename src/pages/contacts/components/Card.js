import React from 'react';
import "./styles.css"

function Card({person}) {
  return(
    <div>
      <div>
        <h2>{person.firstName} {person.lastName}</h2>
        <p>{person.phone}</p>
        <p>{person.gender}</p>
      </div>
    </div>
  );
}

export default Card;

