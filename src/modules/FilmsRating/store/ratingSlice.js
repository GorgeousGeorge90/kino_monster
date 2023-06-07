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

const setError = (state,action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const initialState = {
        films:[
            {Id:1,Title:'Tenet',Year: 2021,Director:'Nolan',Rating:'9'},
        ],
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
        }
    },
    extraReducers:(builder)=> {
        builder
            .addCase(fetchFilm.pending,(state)=> {
                state.status = 'pending'
            })

            .addCase(fetchFilm.fulfilled, (state,action)=> {
                const {Title,Year,imdbID,imdbRating,Director} = action.payload
                const newFilm = {
                    Id:imdbID,
                    Title,
                    Year,
                    Rating:imdbRating,
                    Director,
                }
                state.films.push(newFilm)
                state.status = 'fulfilled'
            })

            .addCase(fetchFilm.rejected, (state,action)=> {
                setError(state,action)
            })
    }
})

export const {deleteFilm} = ratingSlice.actions

export default ratingSlice.reducer