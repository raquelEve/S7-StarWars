import { createSlice } from '@reduxjs/toolkit';

export const starshipSlice = createSlice({
    name: 'starshipList',
    initialState: {
        starshipList: []
    },
    reducers: {
        setStarShipsList: (state, action) => {
            console.log("action", action);
            state.starshipsList = action.payload.starshipsList;
        }
    }
});

export const { setStarShipsList } = starshipSlice.actions;
export default starshipSlice.reducer;