import React from 'react';
import Header from '../common/Header';
import StarshipContainer from '../components/StarshipsContainer/StarshipContainer';

const StarshipsListPage = () => {


    return (
        <>
            <main className='container text-center mx-auto'>
                <StarshipContainer />
            </main>
        </>
    );
}

export default StarshipsListPage;
