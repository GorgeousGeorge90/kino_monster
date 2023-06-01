import {configureStore} from "@reduxjs/toolkit";
import ratingReducer from './../modules/UsersRating/store/ratingSlice';


const store = configureStore({
    reducer: {
        rating: ratingReducer,
    }
})

export default store