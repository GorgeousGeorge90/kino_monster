import { RootState } from '../../../store/store';


export const getNews = (state:RootState) => state.news.news
export const getNewsStatus = (state:RootState) => state.news.status
export const getNewsError = (state:RootState) => state.news.error