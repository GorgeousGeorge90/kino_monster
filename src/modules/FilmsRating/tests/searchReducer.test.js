import searchReducer, {
    deleteFilm,
    clearError,
    clearFilm,
    fetchFilm,
    getFilm,
} from "../store/searchSlice";


const initialState = {
    films:[
        {Id:'1', title:'Hi!'},
        {Id:'2', title:'Joke!'},
    ],
    currentFilm:'not null',
    status: 'idle',
    error: 'Joke!',
}

describe('searchReducer base tests',()=> {
    it('goal: return initialState',()=> {

        const result = searchReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: delete film',()=> {

        const action = {
            type:deleteFilm.type,
            payload:'1',
        }

        const result = searchReducer(initialState,action)
        expect(result.films).toHaveLength(1)
        expect(result.films[0].title).toBe('Joke!')
    })

    it('goal: change currentFilm to null',()=> {

        const result = searchReducer(initialState, ({type:clearFilm.type}))
        expect(result.currentFilm).toBeNull()
    })

    it('goal: change error to null',()=> {

        const result = searchReducer(initialState,({type:clearError.type}))
        expect(result.error).toBeNull()
    })

})

describe('test fetchFilm cases',()=> {
    it('goal: change status to pending',()=> {

        const result = searchReducer(initialState,fetchFilm.pending)
        expect(result.status).toBe('pending')
    })

    it('goal: change status to fulfilled and get film', ()=> {

        const action = {
            type:fetchFilm.fulfilled.type,
            payload: {
                id:'imdbID',
                title:'Title',
                year:'Released',
                rating:'imdbRating',
                director:'Director',
                poster:'Poster',
            }
        }

        const result = searchReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.films).toHaveLength(3)
    })

    it('goal: change status to rejected and get error',()=> {

        const action = {
            type: fetchFilm.rejected.type,
            payload:'Error!',
        }

        const result = searchReducer(initialState,action)
        expect(result.status).toBe('rejected')
        expect(result.error).toBe('Error!')
    })
})

describe('test getFilm cases',()=> {
    it('goal: change status to pending',()=>{

        const result = searchReducer(initialState,({type:getFilm.pending.type}))
        expect(result.status).toBe('pending')
    })

    it('goal: change status to fulfilled and get film',()=> {

        const action = {
            type:getFilm.fulfilled.type,
            payload:'Batman'
        }

        const result = searchReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.currentFilm).toBe('Batman')
    })

    it('goal: change status to rejected and get error',()=> {

        const action = {
            type:getFilm.rejected.type,
            payload:'Critical!',
        }

        const result = searchReducer(initialState,action)
        expect(result.status).toBe('rejected')
        expect(result.error).toBe('Critical!')
    })
})