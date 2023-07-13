import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import favFilmApi from "../api/api";
import {delay} from "../../../utils/delay";


export const fetchFilm = createAsyncThunk(
    'search/fetchFilm',
    async function (payload,{rejectWithValue}) {
        const {title,year} = payload
        try {
            await delay(3000)
            const response =  await favFilmApi.addFilm(title,year)

            if (response.Error) {
                throw new Error(response.Error)
            } else {
                return response
            }

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
        film:null,
        status: 'idle',
        error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearData(state) {
            state.film = null
            state.error = null
        },
    },
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
                setError(state,action)
            })
    }
})

export const {clearData} = searchSlice.actions

export default searchSlice.reducer