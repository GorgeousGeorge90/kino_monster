import filmsReducer, {
    clearError, fetchFilms
} from '../store/filmsSlice';

const initialState = {
    films: [],
    status:'idle',
    error:'Error!',
}

describe('filmsReducer tests',()=>{
    it('goal: return initialState without changes',()=> {

        const result = filmsReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: change error to null',()=> {

        const result = filmsReducer(initialState,({type:clearError.type}))
        expect(result.error).toBeNull()
    })
})

describe('fetchFilms tests',()=> {
    it('goal: change status to pending',()=> {

        const result = filmsReducer(initialState,({type:fetchFilms.pending.type}))
        expect(result.status).toBe('pending')
    })

    it('goal: change status to fulfilled and get films',()=> {

        const action = {
            type: fetchFilms.fulfilled.type,
            payload: [
                {id: '1', title: 'Batman'}
            ]
        }

        const result = filmsReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.films).toHaveLength(1)
        expect(result.films[0].title).toBe('Batman')
    })

    it('goal: change status to rejected and get error',()=> {

        const action = {
            type:fetchFilms.rejected.type,
            payload:'Critical!',
        }

        const result = filmsReducer(initialState,action)
        expect(result.status).toBe('rejected')
        expect(result.error).toBe('Critical!')
    })
})