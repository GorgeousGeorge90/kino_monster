import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import favFilmApi from "../api/api";
import {delay} from "../../../utils/delay";


export const fetchFilm = createAsyncThunk(
    'rating/fetchFilm',
    async function (payload,{rejectWithValue}) {
        const {title,year} = payload
        try {
            await delay(1000)
            const response =  await favFilmApi.addFilm(title,year)

            if (response.Error) {
                throw new Error(response.Error)
            }

            return response

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getFilm = createAsyncThunk(
    'rating/getFilm',
    async function(id,{rejectWithValue}) {

        try {
            const response = await favFilmApi.getFilm(id)

            if (response.Error) {
                throw new Error(response.Error)
            }

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

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        deleteFilm(state,action) {
            state.films = state.films.filter(film=> film.Id !== action.payload)
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
                console.log(action.payload)
                const {Poster,Title,Year,imdbID,imdbRating,Director} = action.payload
                const newFilm = {
                    id:imdbID,
                    title:Title,
                    year:Year,
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

export const {deleteFilm, clearFilm} = ratingSlice.actions

export default ratingSlice.reducer