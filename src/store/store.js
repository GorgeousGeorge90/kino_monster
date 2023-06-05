import {configureStore} from "@reduxjs/toolkit";
import ratingReducer from '../modules/FilmsRating/store/ratingSlice';
import commentsReducer from '../modules/Comments/store/commentsSlice';
import infoReducer from '../modules/InfoBlock/store/infoSlice';


const store = configureStore({
    reducer: {
        rating: ratingReducer,
        comments: commentsReducer,
        info: infoReducer,
    }
})


window.store = store

export default store