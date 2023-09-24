import searchReducer, {
    fetchFilm,
} from '../store/searchSlice';
import { SearchTypes } from '../types/types';


const initialState:SearchTypes = {
    film:null,
    status: 'idle',
    error: 'Joke!',
}

describe('searchReducer base tests',()=> {
    it('goal: return initialState',()=> {

        const result = searchReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: change status to pending',()=> {

        const result = searchReducer(initialState,fetchFilm.pending)
        expect(result.status).toBe('pending')
    })

    it('goal: change status to fulfilled and get film', ()=> {


        const action = {
            type:fetchFilm.fulfilled.type,
            payload: {
                Title:'Batman',
                Year:'2005',
                Poster:'none',
                Metascore:'9',
                imdbRating:'10/3',
                Released:'2005',
                Genre:'Action',
                Director:'Nolan',
                Actors:'Lol',
                Plot:'Nice!',
            }
        }

        const result = searchReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result?.film?.Title).toBe('Batman')
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