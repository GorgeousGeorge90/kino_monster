import newsReducer, { fetchNews } from '../store/newsSlice';
import { initialStateType } from '../types/types';


const initialState:initialStateType = {
    news:[],
    status:'idle',
    error: null,
}

describe('newsReducer tests',()=> {
    it('goal: change status to pending', ()=> {

        const result = newsReducer(initialState,fetchNews.pending)
        expect(result.status).toBe('pending')
    })

    it('goal: test success case', ()=>{
        const action = {
            type:fetchNews.fulfilled.type,
            payload:[
                {
                    headline: {
                        main:'Hi!'
                    },
                    abstract:'nice',
                    web_url:'no',
                    source:'no',
                    multimedia:[
                        { url:'no' }
                    ],
                    byline:'byMe'
                }
            ],
        }

        const result = newsReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.news[0].title).toBe('Hi!')
    })

    it('goal: test fail case',()=> {

        const action = {
            type:fetchNews.rejected.type,
            payload:'Error!'
        }

        const result = newsReducer(initialState,action)
        expect(result.status).toBe('rejected')
        expect(result.error).toEqual('Error!')
    })
})