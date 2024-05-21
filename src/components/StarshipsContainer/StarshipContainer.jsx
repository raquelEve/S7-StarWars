import { useState, useEffect, useRef } from 'react';
import Starship from './starship/Starship';
import { useSelector } from 'react-redux';
import { useGetAllStarshipsQuery, useGetStarshipByPageQuery } from '../../store/apis/starshipApi';


const StarshipContainer = () => {

    // const [page, setPage] = useState(1);

    // const { data: starships, error, isLoading } = useGetStarshipByPageQuery(page);

    // const nextPage = () => {
    //     if (starships.next != null) {
    //         setPage(page + 1);
    //     }
    // };

    // useEffect(() => {
    //     if (starships && starships.next) {
    //         // Fetch the next page if available
    //         setPage(prevPage => prevPage + 1);

    //     }
    // }, []);

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    // return (
    //     <div>
    //         <h1>Starship List</h1>
    //         {starships && starships.results.map((starship) => (
    //             <Starship key={starship.url} starship={starship} />
    //         ))}
    //         <button className='btn' onClick={nextPage}>more</button>
    //         <br></br>
    //     </div>
    // );

    // ------------
    const [page, setPage] = useState(1);
    const [allStarships, setAllStarships] = useState([]);
    const { data: starships, error, isLoading } = useGetStarshipByPageQuery(page);
    const observer = useRef();
    const lastStarshipElementRef = useRef();

    useEffect(() => {
        if (starships && starships.results) {
            setAllStarships(prevStarships => [...prevStarships, ...starships.results]);
        }
    }, [starships]);

    const nextPage = () => {
        if (starships && starships.next) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && starships && starships.next) {
                nextPage();
            }
        });

        if (lastStarshipElementRef.current) {
            observer.current.observe(lastStarshipElementRef.current);
        }
    }, [isLoading]);

    if (isLoading && page === 1) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Starships</h1>
            {allStarships.map((starship, index) => (
                <div key={index} ref={index === allStarships.length - 1 ? lastStarshipElementRef : null}>
                    <Starship key={starship.url} starship={starship} />
                    {/* <h2>{starship.name}</h2> */}
                    {/* <p>{starship.model}</p> */}
                </div>
            ))}
            {isLoading && <div>Loading...</div>}
            <button className='btn btn-primary' onClick={nextPage} disabled={!starships.next}> more</button>
            <br></br>
        </div>
    );
};


export default StarshipContainer;
