import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    comments: []
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state,action) {
            const {name, comment} = action.payload
            const newUser = {
                id: Date.now().toString(),
                name,
                comment,
            }

            state.comments.push(newUser)
        },
        updateComment(state,action) {
            const {id,text} = action.payload
            state.comments.find(el => el.id === id).comment = text
        },
        deleteComment(state,action) {
            state.comments = state.comments.filter(comment=> comment.id !== action.payload)
        }
    }
})

export const {addComment,updateComment,deleteComment} = commentsSlice.actions

export default commentsSlice.reducer
