import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    comments: [
        {id:1, name: 'George', city: 'Moscow', comment: 'Batman Begins is my favorite!'},
    ]
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state,action) {
            const {name, city, comment} = action.payload
            const newUser = {
                id: Date.now().toString(),
                name,
                city,
                comment,
            }

            state.comments.push(newUser)
        },
        deleteComment(state,action) {
            state.comments = state.comments.filter(comment=> comment.id !== action.payload)
        }
    }
})

export const {addComment, deleteComment} = commentsSlice.actions

export default commentsSlice.reducer
