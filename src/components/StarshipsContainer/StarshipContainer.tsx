import React from 'react';
import Starship from './starship/Starship';
import { useSelector } from 'react-redux';
import { useGetAllStarshipsQuery } from '../../store/apis/starshipApi';


const StarshipContainer = () => {
    
    const { data: starships, error, isLoading } = useGetAllStarshipsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
   
    return (
        <div>
            <h1>Starship List</h1>
             {starships && starships.results.map((starship) => (
                <Starship key={starship.name} starship={starship} />
            ))}
        </div>
    );
}

export default StarshipContainer;
