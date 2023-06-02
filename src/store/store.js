import {configureStore} from "@reduxjs/toolkit";
import ratingReducer from '../modules/FilmsRating/store/ratingSlice';
import commentsReducer from '../modules/Comments/store/commentsSlice';


const store = configureStore({
    reducer: {
        rating: ratingReducer,
        comments: commentsReducer,
    }
})

export default store