import { createSlice } from '@reduxjs/toolkit';

export const starshipSlice = createSlice({
    name: 'starshipList',
    initialState: {
        starshipList: []
    },
    reducers: {
        setStarShips: (state, action) => {
            // state.starshipsList = action.payload.starshipsList;
            state.starshipsList = action.payload;
        }
    }
});

export const { setStarShips } = starshipSlice.actions;
export default starshipSlice.reducer;