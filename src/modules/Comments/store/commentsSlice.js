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
            const currentComment = state.comments.find(comment => comment.id === action.payload)
            state.comments.splice(state.comments.indexOf(currentComment),1)
        }
    }
})

export const {addComment, deleteComment} = commentsSlice.actions

export default commentsSlice.reducer
