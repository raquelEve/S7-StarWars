// StarshipContext.js

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useGetStarshipByPageQuery } from '../store/apis/starshipApi';

const StarshipContext = createContext();

export const useStarshipContext = () => {
    return useContext(StarshipContext);
};

export const StarshipContextProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [allStarships, setAllStarships] = useState([]);
    const { data: starships, error, isLoading } = useGetStarshipByPageQuery(page);

    const handleNextPage = () => {
        if (starships && starships.next && page < 5) {
            setPage(prevPage => prevPage + 1);
        }
        console.log("naves", allStarships);
    };

    useEffect(() => {
        if (starships && starships.results) {
            setAllStarships(prevStarships => [...prevStarships, ...starships.results]);
        }
    }, [starships]);

    const value = {
        handleNextPage,
        allStarships,
        isLoading,
        error,
        hasNextPage: !!starships?.next // Verifica si hay una próxima página
    };

    return (
        <StarshipContext.Provider value={value}>
            {children}
        </StarshipContext.Provider>
    );
};
