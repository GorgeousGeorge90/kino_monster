import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    films: []
}

const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers:{},
    extraReducers:{},
})

export default filmsSlice.reducer