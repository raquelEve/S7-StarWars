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
        <div className="card-body">
          <h2 className="card-title">{starship.name}</h2>
          <p>{starship.model}</p>
          <div className="card-actions justify-end">
            <h2 className="card-title">{starship.name}</h2>
          <Link to={`/detail/${starshipId}`}  className="btn btn-primary">
              Ver más</Link>
          </div>
        </div>
      </div>
    );
}

export default Starship;
