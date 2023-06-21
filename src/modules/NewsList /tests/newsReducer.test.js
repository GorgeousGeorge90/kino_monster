import newsReducer, {fetchNews} from '../store/newsSlice';


const initialState = {
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
                { title:'Nice to see you!' }
            ]
        }

        const result = newsReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.news[0].title).toBe('Nice to see you!')
    })

    it('goal: test fail case',()=> {

        const action = {
            type:fetchNews.rejected.type,
            payload:'Error!'
        }

        const result = newsReducer(initialState,action)
        expect(result.status).toBe('rejected')
        expect(result).toEqual({
            news:[],
            status: 'rejected',
            error: 'Error!',
        })
    })
})