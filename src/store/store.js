import {configureStore} from "@reduxjs/toolkit";
import searchReducer from '../modules/FilmsRating/store/searchSlice';
import commentsReducer from '../modules/Comments/store/commentsSlice';
import infoReducer from '../modules/InfoBlock/store/infoSlice';
import filmsReducer from '../modules/FilmsList/store/filmsSlice';
import newsReducer from '../modules/NewsList /store/newsSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        comments: commentsReducer,
        info: infoReducer,
        films: filmsReducer,
        news: newsReducer,
    }
})


window.store = store

export default store