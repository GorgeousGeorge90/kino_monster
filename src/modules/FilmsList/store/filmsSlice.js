import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import filmsApi from '../api/api';
import {delay} from '../../../utils/delay';


export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (_,{rejectWithValue})=> {
        try {
            await delay(2000)
            const response = await filmsApi.getFilms()

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
            state.selected = state.films.find(film => film.id === action.payload)
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
                state.films = action.payload
                state.status = 'fulfilled'
            })

            .addCase(fetchFilms.rejected, (state,action)=>{
                state.error = action.payload
                state.status = 'rejected'
            })
    })
})

export const { clearError, selectFilm, clearSelected } = filmsSlice.actions
export default filmsSlice.reducer