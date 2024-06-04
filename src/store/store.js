
import { configureStore } from '@reduxjs/toolkit';
import starshipSlice from './slices/starshipSlice';
import userSlice from './slices/Userslice';
import { starshipApi } from './apis/starshipApi';
// import userReducer from './slices/Userslice';

export const store = configureStore({
    reducer: {
        // StarshipList: starshipSlice.reducer,
        // user: userSlice.reducer,
        StarshipList: starshipSlice,
        user: userSlice,
        [starshipApi.reducerPath]: starshipApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starshipApi.middleware),
})


