import {createSlice} from "@reduxjs/toolkit";


const initialState = {
        top:[
            {id:1,film:'Tenet',year: 2021,rating:9},
            {id:2,film:'Batman', year: 2023,rating:10},
            {id:3,film:'Spider-Man',year: 2002, rating:8},
        ],
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        addFilm: (state,action)=> {
            const newFilm = {
                id: Date.now().toString(),
                film: action.payload.film,
                year: action.payload.year,
                rating: action.payload.rating,
            }

            state.top.push(newFilm)
        },
        updateFilm: (state,action) => {
            const currentFilm = state.top.find(film => film.id === action.payload.id)
            currentFilm.film = action.payload.film
        },
        updateYear: (state,action) => {
            const currentFilm = state.top.find(film => film.id === action.payload.id)
            currentFilm.film = action.payload.year
        },
        updateRating: (state,action) => {
            const currentFilm = state.top.find(film => film.id === action.payload.id)
            currentFilm.film = action.payload.rating
        },
        deleteFilm: (state,action)=> {
            state.top.filter(item => item.id !== action.payload)
        }
    }
})

export const {addFilm, updateFilm, updateYear,updateRating,deleteFilm} = ratingSlice.actions

export default ratingSlice.reducer