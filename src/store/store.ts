import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from '../modules/FilmCard/store/searchSlice';
import commentsReducer from '../modules/Comments/store/commentsSlice';
import infoReducer from '../modules/InfoBlock/store/infoSlice';
import filmsReducer from '../modules/FilmsList/store/filmsSlice';
import newsReducer from '../modules/NewsList /store/newsSlice';



export const rootReducer = combineReducers({
    search: searchReducer,
    comments: commentsReducer,
    info: infoReducer,
    films: filmsReducer,
    news: newsReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store