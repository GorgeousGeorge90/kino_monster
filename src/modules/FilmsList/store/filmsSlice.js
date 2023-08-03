import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import filmsApi from '../api/api';
import { delay } from '../../../utils/delay';


export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (_,{rejectWithValue})=> {
        try {
            await delay(2000)
            const response = await filmsApi.getFreshFilms()

            return response.results
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }

)

const initialState = {
    films: [],
    status:'idle',
    error:null,
    selected:null,
}

const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers:{
        selectFilm:(state,action)=> {
            state.selected = state.films.find(film => film['_id'] === action.payload)
        },
        sortedFilms:(state,action)=> {
            if (action.payload === 'rating') {
                state.films.sort((a, b) => Number(b.rating.substring(0,b.rating.length-3))
                    -  Number(a.rating.substring(0, a.rating.length-3)))
            } else if (action.payload === 'release') {
                state.films.sort((a, b) => Date.parse(b.release) - Date.parse(a.release))
            }
        },
        clearSelected:(state)=> {
            state.selected = null
        },
        clearError:(state) => {
            state.error = null
        }
    }
    ,
    extraReducers: (builder => {
        builder
            .addCase(fetchFilms.pending,(state)=> {
                state.status = 'pending'
            })

            .addCase(fetchFilms.fulfilled, (state,action)=> {
                state.films = action.payload.filter((item,i)=> i < 20)
                state.status = 'fulfilled'
            })

            .addCase(fetchFilms.rejected, (state,action)=>{
                state.error = action.payload
                state.status = 'rejected'
            })
    })
})

export const { clearError, selectFilm, clearSelected, sortedFilms } = filmsSlice.actions
export default filmsSlice.reducer