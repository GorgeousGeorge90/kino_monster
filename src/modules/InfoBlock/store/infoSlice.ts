import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {PhraseItemType, PhraseType} from '../types/types';
import InfoServices from './../services/services';



export const fetchPhrase = createAsyncThunk<
    PhraseItemType,
    undefined,
    {
        rejectValue:string,
    }
    >(
    '@fetchPhrase/phrase',
    async (_,{rejectWithValue}) => {
    const response = await InfoServices.getText()

    if (response) {
        return response
    } else {
        return rejectWithValue('Error!')
    }
})


const initialState:PhraseType = {
    phrase: null,
    status: 'idle',
    error: null,
}

const infoSlice = createSlice({
    name: '@info',
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
                if (action.payload) {
                    state.error = action.payload
                    state.status = 'rejected'
                }
            })
    }
})

export default infoSlice.reducer
