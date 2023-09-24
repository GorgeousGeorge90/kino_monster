import { RootState } from '../../../store/store';
import { createSelector } from '@reduxjs/toolkit';


export const getComments = (state:RootState) => state.comments.comments
export const getCurrent = (state:RootState) => state.comments.current
export const getError = (state:RootState) => state.comments.error
export const getStatus = (state:RootState) => state.comments.status
export const getCurrentComments = createSelector([getComments,getCurrent],(comments,current) => {
    return current ? comments.filter(comment => comment.film === current):null
})