import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import NewsServices from './../services/services';
import { initialStateType, NewsType, ResponseNewsType } from '../types/types';


export const fetchNews = createAsyncThunk<
    any,
    undefined,
    {
        rejectValue:string,
    }
    >(
    '@fetchNews/news',
    async (_,{rejectWithValue})=> {
            const response = await NewsServices.fetchNews()

            if (response.status === 'OK') {
                console.log(response.response.docs)
                return response.response.docs
            } else {
                return rejectWithValue('Error!')
            }
    }
)


const initialState:initialStateType = {
    news:[],
    status:'idle',
    error: null,
}

const newsSlice = createSlice({
    name: '@news',
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'pending'
            })

            .addCase(fetchNews.fulfilled, (state, action) => {
                state.news = action.payload.reduce((acc:NewsType[] ,item:ResponseNewsType) => {
                    const new_item:NewsType = {
                        title:item.headline.main,
                        abstract:item.abstract,
                        web_url:item.web_url,
                        source:item.source,
                        byline:item.byline.original,
                        image:item.multimedia[0]?.url ? item.multimedia[0]?.url:item.multimedia[1]?.url,
                    }

                    acc.push(new_item)

                    return acc
                },[])
                state.status = 'fulfilled'
            })

            .addCase(fetchNews.rejected, (state, action) => {
                if (action.payload) {
                    state.error = action.payload
                    state.status = 'rejected'
                }
            })
    }
})

export default newsSlice.reducer