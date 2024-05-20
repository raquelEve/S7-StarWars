
import { configureStore } from '@reduxjs/toolkit';
import starshipSlice from './slices/starshipSlice';
import { starshipApi } from './apis/starshipApi';

export const store = configureStore({
    reducer: {
        StarshipList: starshipSlice.reducer,
        [starshipApi.reducerPath]: starshipApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starshipApi.middleware),
})


