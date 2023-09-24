import { RootState } from '../../../store/store';

export const getSearchFilm = (state:RootState) => state.search.film
export const getSearchStatus = (state:RootState) => state.search.status
export const getSearchError = (state:RootState) => state.search.error
