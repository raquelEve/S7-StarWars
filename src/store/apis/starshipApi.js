import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starshipApi = createApi({
    reducerPath: 'starships',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints: (builder) => ({

        getAllStarships: builder.query({
            query: () => '/starships'
        }),
        getStarshipById: builder.query({
            query: (id) => `/starships/${id}`
        }),

    })
})
export const { useGetAllStarshipsQuery, useGetStarshipByIdQuery } = starshipApi