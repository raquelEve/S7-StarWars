// StarshipContainer.js

import { useEffect, useRef } from 'react';
import Starship from './starship/Starship';
import { useStarshipContext } from "../../context/StarshipContext";

const StarshipContainer = () => {
    const { handleNextPage, allStarships, isLoading, error, hasNextPage } = useStarshipContext();
    const observer = useRef();
    const lastStarshipElementRef = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !isLoading && hasNextPage) {
                handleNextPage();
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [handleNextPage, isLoading, hasNextPage]);

    useEffect(() => {
        if (lastStarshipElementRef.current) {
            observer.current.observe(lastStarshipElementRef.current);
        }

        return () => {
            if (lastStarshipElementRef.current) {
                observer.current.unobserve(lastStarshipElementRef.current);
            }
        };
    }, [allStarships]);

    return (
        <div className='mt-8'>
            {allStarships.map((starship, index) => (
                <div key={index} ref={index === allStarships.length - 1 ? lastStarshipElementRef : null}>
                    <Starship key={starship.url} starship={starship} />
                </div>
            ))}
            {isLoading && <div>Loading...</div>}

        </div>
    );
};

export default StarshipContainer;
