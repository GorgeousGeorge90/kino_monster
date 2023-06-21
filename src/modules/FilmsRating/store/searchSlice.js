import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import favFilmApi from "../api/api";
import {delay} from "../../../utils/delay";


export const fetchFilm = createAsyncThunk(
    'search/fetchFilm',
    async function (payload,{rejectWithValue}) {
        const {title,year} = payload
        try {
            await delay(1000)
            const response =  await favFilmApi.addFilm(title,year)

            return response

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getFilm = createAsyncThunk(
    'search/getFilm',
    async function(id,{rejectWithValue}) {

        try {
            const response = await favFilmApi.getFilm(id)

            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }

)

const setError = (state,action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const initialState = {
        films:[],
        currentFilm:null,
        status: 'idle',
        error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        deleteFilm(state,action) {
            state.films = state.films.filter(film=> film.Id !== action.payload)
        },
        clearError(state) {
            state.error = null
        },
        clearFilm(state) {
            state.currentFilm = null
        }
    },
    extraReducers:(builder)=> {
        builder
            .addCase(fetchFilm.pending,(state)=> {
                state.status = 'pending'
            })

            .addCase(fetchFilm.fulfilled, (state,action)=> {
                const {Poster,Title,Released,imdbID,imdbRating,Director} = action.payload
                const newFilm = {
                    id:imdbID,
                    title:Title,
                    year:Released,
                    rating:imdbRating,
                    director:Director,
                    poster:Poster,
                }
                state.films.push(newFilm)
                state.status = 'fulfilled'
            })

            .addCase(fetchFilm.rejected, (state,action)=> {
                setError(state,action)
            })

            .addCase(getFilm.pending, (state) => {
                state.status = 'pending'
            })

            .addCase(getFilm.fulfilled, (state,action)=> {
                state.currentFilm = action.payload
                state.status = 'fulfilled'
            })

            .addCase(getFilm.rejected, (state,action)=> {
                setError(state,action)
            })
    }
})

export const {deleteFilm, clearFilm, clearError} = searchSlice.actions

export default searchSlice.reducer