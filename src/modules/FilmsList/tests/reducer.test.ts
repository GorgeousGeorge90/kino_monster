import filmsReducer, {
    clearError,
    selectFilm,
    clearSelected,
    fetchFilms,
} from '../store/filmsSlice';
import { FilmsStateType } from '../types/types';

const initialState:FilmsStateType = {
    films: [
        {   _id:'1',
            titleOriginal:'Batman',
            description:'Nice!',
            year: '2005',
            release:'2005',
            rating:'9',
            genres:[
                {name:'Art'},
            ],
            image:'no',
            countries:['Moscow']
        },
    ],
    status:'pending',
    error:'Error!',
    selected:null,
}

describe('filmsReducer tests',()=>{
    it('goal: return initialState without changes',()=> {

        const result = filmsReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: select film',()=> {

        const action = {
            type:selectFilm.type,
            payload:'1',
        }

        const result = filmsReducer(initialState,action)
        expect(result.selected?.titleOriginal).toBe('Batman')
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
            payload:  [
                {
                    _id:'2',
                    titleOriginal:'Lego',
                    description:'Nice!',
                    year: '2005',
                    release:'2005',
                    rating:'9',
                    genres:[
                        {name:'Art'},
                    ],
                    image:'no',
                    countries:['Moscow']
                },
            ],
        }

        const result = filmsReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.films).toHaveLength(1)
        expect(result.films[0].titleOriginal).toBe('Lego')
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