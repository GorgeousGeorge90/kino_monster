import { RootState } from '../../../store/store';
import { createSelector } from '@reduxjs/toolkit';
import SupportServices from './../../../utils/services/services';

export const getState = (state:RootState) => state.films
export const getAll = (state:RootState) => state.films.films
export const getError = (state:RootState) => state.films.error
export const getStatus = (state:RootState) => state.films.status
export const getSelected = (state:RootState) => state.films.selected
export const selectByRating= createSelector(getAll, films => {
        return films ? [...films].sort((a, b) => Number(SupportServices.rateTransform(a.rating)) - Number(SupportServices.rateTransform(b.rating))):[]
})

export const selectByRelease = createSelector(getAll, films => {
    return  films ? [...films].sort((a,b) => Date.parse(a.release) - Date.parse(b.release)):[]
})


