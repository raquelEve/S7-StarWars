import React from 'react';
import { useState } from 'react';
import Header from '../common/Header';
import StarshipContainer from '../components/StarshipsContainer/StarshipContainer';
import { useGetAllStarshipsQuery } from '../store/apis/starshipApi';

const StarshipsListPage = () => {
    

    return (
        <>
            <Header />
            <main className='container text-center mx-auto'>
                <h1>StarShips lists</h1>
                {/* <pre>{JSON.stringify(starships, null, 2)}</pre> */}
                <StarshipContainer />
            </main>
        </>
    );
}

export default StarshipsListPage;
