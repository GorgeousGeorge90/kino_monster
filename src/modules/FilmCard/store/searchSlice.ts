import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {FilmCardType, SearchTypes} from '../types/types';
import { FilmSearchType } from "../components/FilmSearchForm/FilmSearchForm";
import FilmCardServices from './../services/services';



export const fetchFilm = createAsyncThunk<
    FilmCardType,
    FilmSearchType,
    {
        rejectValue: string,
    }>(
    '@fetchFilm/search',
    async (payload, {rejectWithValue}) => {
        const {title, year} = payload
        const response = await FilmCardServices.addFilm(title, year)

        if (response) {
            return response
        } else {
            return rejectWithValue('Bad request!')
        }
    }
)

const initialState:SearchTypes = {
        film:null,
        status:'idle',
        error: null,
}

const searchSlice = createSlice({
    name: '@search',
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
            .addCase(fetchFilm.pending,(state)=> {
                state.status = 'pending'
            })

            .addCase(fetchFilm.fulfilled, (state,action)=> {
                state.film = action.payload
                state.status = 'fulfilled'
            })

            .addCase(fetchFilm.rejected, (state,action)=> {
                if (action.payload) {
                    state.error = action.payload
                    state.status = 'rejected'
                }
            })
    }
})

export default searchSlice.reducer