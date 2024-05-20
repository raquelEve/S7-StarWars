import React from 'react';

const Starship = ({ starship }) => {
    return (
        <div className="card bg-base-100 shadow-x starshipFromList mb-4">
        <div className="card-body">
          <h2 className="card-title">{starship.name}</h2>
          <p>{starship.model}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ver más</button>
          </div>
        </div>
      </div>
    );
}

export default Starship;
