import React from 'react';
import { Link } from 'react-router-dom';

const Starship = ({ starship }) => {
  // extraemos de la url la id de la nave
  const extractIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

  const starshipId = extractIdFromUrl(starship.url);
  
  return (
    <div className="card bg-base-100 shadow-x starshipFromList mb-4">
        <div className="card-body flex flex-row">
          <h2 className="card-title w-36">{starship.name}</h2>
          <p className='w-32'>{starship.model}</p>
        <Link to={`/detail/${starshipId}`} className="btn btn-primary btn-sm w-28">Ver más</Link>
        </div>
      </div>
    );
}

export default Starship;
