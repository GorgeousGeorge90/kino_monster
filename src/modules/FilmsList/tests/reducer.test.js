import filmsReducer, {
    clearError,
    selectFilm,
    clearSelected,
    fetchFilms, sortedFilms
} from '../store/filmsSlice';

const initialState = {
    films: [
        {id:'1', title:'Batman', vote_average:3, release_date:"2023-05-03"},
        {id:'2', title:'IronMan', vote_average:5, release_date:"2023-06-06"},
    ],
    status:'idle',
    error:'Error!',
    selected:'Batman',
}

describe('filmsReducer tests',()=>{
    it('goal: return initialState without changes',()=> {

        const result = filmsReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: select film',()=> {

        const action = {
            type:selectFilm.type,
            payload:'2',
        }

        const result = filmsReducer(initialState,action)
        expect(result.selected.title).toBe('IronMan')
    })

    it('goal: change selected to null',()=> {

        const result = filmsReducer(initialState,({type:clearSelected.type}))
        expect(result.selected).toBeNull()
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

    it('goal:sorted data by vote average', ()=> {
        const action = {
            type:sortedFilms.type,
            payload:'vote_average',
        }

        const result = filmsReducer(initialState,action)
        console.log(result.sorted)
    })

    it('goal:sorted data by release date', ()=> {
        const action = {
            type:sortedFilms.type,
            payload:'release_date',
        }

        const result = filmsReducer(initialState,action)
        console.log(result.sorted)
    })
})