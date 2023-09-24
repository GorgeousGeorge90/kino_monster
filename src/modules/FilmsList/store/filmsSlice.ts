import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import FilmsServices from './../services/services';
import { FilmItemType, FilmsStateType, FilmType } from '../types/types';


export const fetchFilms = createAsyncThunk<
    FilmType[],
    undefined,
    {
        rejectValue:string,
    }
    >(
    '@fetchFilms/films',
    async (_,{rejectWithValue})=> {
            const response = await FilmsServices.getFreshFilms()
            if (response) {
                return response.results
            } else {
                return rejectWithValue('Error!')
            }
    }
)

const initialState:FilmsStateType = {
    films: [],
    status:'idle',
    error: null,
    selected:null,
}

const filmsSlice = createSlice({
    name:'@films',
    initialState,
    reducers:{
        selectFilm:(state,action:PayloadAction<FilmItemType['_id']>)=> {
            const current = state.films.find(film => film._id === action.payload)
            if (current) {
                state.selected = current
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
                if (action.payload) {
                    state.error = action.payload
                    state.status = 'rejected'
                }
            })
    })
})

export const { clearError, selectFilm, clearSelected } = filmsSlice.actions
export default filmsSlice.reducer