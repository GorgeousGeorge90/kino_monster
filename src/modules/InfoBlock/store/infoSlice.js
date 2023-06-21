import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import infoApi from "../api/api";
import {delay} from "../../../utils/delay";



export const fetchPhrase = createAsyncThunk(
    'info/fetchPhrase',
    async function(_,{rejectWithValue}) {
        try {
            await delay(2000)
            return  await infoApi.getText()

        } catch (error) {
            return rejectWithValue(error.message)
        }
})

const setError = (state,action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const initialState = {
    phrase: null,
    status: 'idle',
    error: null,
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhrase.pending, (state) => {
                state.status = 'pending'
            })

            .addCase(fetchPhrase.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.phrase = action.payload
            })

            .addCase(fetchPhrase.rejected, (state, action) => {
                setError(state, action)
            })
    }
})

export default infoSlice.reducer
