import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentsType, CommentType } from '../types/types';
import CommentsServices from './../services/services';
import SupportServices from './../../../utils/services/services';




export const fetchComments = createAsyncThunk<
    any,
    undefined
    >(
    '@fetchComments/comments',
    async (_, {dispatch}) => {
        await SupportServices.delay(3000)
        const response = await CommentsServices.fetchComments()

        if (response) {
            dispatch(getComments(response))
        } else {
            dispatch(getError('Some problems with fetch!'))
        }
    })

type PayloadType = Omit<CommentType, 'id'>

export const setNewComment = createAsyncThunk<
    any,
    PayloadType
    >(
    '@setNewComment/comments',
    async (payload,{dispatch}) => {
        const { comment,film } = payload
        const response = await CommentsServices.createComment(comment,film)

        if(response) {
            dispatch(addComment(response[0]))
        } else {
            dispatch(getError('Problem with creating new comment!'))
        }
    }
)

const initialState:CommentsType = {
    comments:[],
    status:'idle',
    current:null,
    error:null,
}

const commentsSlice = createSlice({
    name: '@comments',
    initialState,
    reducers: {
        getComments:(state,action:PayloadAction<CommentType[]>) => {
            state.comments = action.payload
        },
        getError:(state,action:PayloadAction<string>) => {
           state.error = action.payload
        },
        addComment:(state,action:PayloadAction<CommentType>)=> {
            state.comments.push(action.payload)
        },
        setCurrent:(state,action:PayloadAction<string>) => {
            state.current = action.payload
        }
    },
})

export const { getComments, getError, addComment, setCurrent } = commentsSlice.actions

export default commentsSlice.reducer
