import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStarshipByIdQuery } from '../../store/apis/starshipApi';
import ufo from '../../assets/ufo.webp'
const StarshipDetailContainer = () => {
    // de los parametros que vienen por la ulr cogemos id
    const { id } = useParams();
    const { data: starship, error, isLoading } = useGetStarshipByIdQuery(id);
    const imgUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div className='container text-center mx-auto flex'>
            <div className='w-1/3'>
                <img src={imgUrl} className="imgInDetail" />
            </div>
            <div className='w-2/3 px-4 border-l-4 border-primary contentTableInDetail'>
                <h1 className='text-2xl font-bold'>{starship.name}</h1>

                <table className='tableInDetail'>
                    <tbody>
                        <tr>
                            <th>Model:</th>
                            <td>{starship.model}</td>
                        </tr>
                        <tr>
                            <th>Manufacturer:</th>
                            <td>{starship.manufacturer}</td>
                        </tr>
                        <tr>
                            <th>Cost in Credits:</th>
                            <td>{starship.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <th>Length:</th>
                            <td>{starship.length}</td>
                        </tr>
                        <tr>
                            <th>Max Atmosphering Speed:</th>
                            <td>{starship.max_atmosphering_speed}</td>
                        </tr>
                        <tr>
                            <th>Crew:</th>
                            <td>{starship.crew}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StarshipDetailContainer;
