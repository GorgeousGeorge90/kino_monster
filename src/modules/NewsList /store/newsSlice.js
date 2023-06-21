import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {delay} from "../../../utils/delay";
import newsApi from "../api/api";


export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_,{rejectWithValue})=> {

        try {
            await delay(500)
            const response = await newsApi.getNews()

            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)


const initialState = {
    news:[],
    status:'idle',
    error: null,
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'pending'
            })

            .addCase(fetchNews.fulfilled, (state, action) => {
                state.news = action.payload.map((item,i) => {
                    return {
                        ...item,
                        id: Date.now().toString() + i,
                    }
                })
                state.status = 'fulfilled'
            })

            .addCase(fetchNews.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'rejected'
            })
    }
})

export default newsSlice.reducer