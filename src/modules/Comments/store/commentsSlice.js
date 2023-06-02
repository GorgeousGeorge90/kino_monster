import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    users: [
        {id:1, name: 'George', city: 'Moscow', comment: 'Batman Begins is my favorite!'},
    ]
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addUser(state,action) {
            const {name, city, comment} = action.payload
            const newUser = {
                id: Date.now().toString(),
                name,
                city,
                comment,
            }
            state.users.push(newUser)

        },
        deleteUser(state,action) {
            state.users.filter(user => user.id !== action.payload)
        }
    }
})

export const {addUser, deleteUser} = commentsSlice.actions

export default commentsSlice.reducer
