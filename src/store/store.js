import {configureStore} from "@reduxjs/toolkit";
import ratingReducer from '../modules/FilmsRating/store/ratingSlice';
import commentsReducer from '../modules/Comments/store/commentsSlice';
import infoReducer from '../modules/InfoBlock/store/infoSlice';
import filmsReducer from '../modules/FilmsList/store/filmsSlice';


const store = configureStore({
    reducer: {
        rating: ratingReducer,
        comments: commentsReducer,
        info: infoReducer,
        films: filmsReducer,
    }
})


window.store = store

export default store