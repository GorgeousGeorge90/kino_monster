import {
    getFilms,
    getCurrentFilm,
    getError,
    getStatus
} from '../selectors/selectors';

const search = {
    films:[],
    currentFilm:null,
    status: 'idle',
    error: null,
}

describe('tests for FilmsSearch selectors',()=>{
    it('goal:to get films',()=> {

        const films = getFilms({search})
        expect(films).toEqual([])
    })

    it('goal:to get currentFilm',()=> {

        const currentFilms = getCurrentFilm({search})
        expect(currentFilms).toEqual(null)
    })

    it('goal:to get error',()=>{

        const error = getError({search})
        expect(error).toEqual(null)
    })

    it('goal:to get status',()=>{

        const status = getStatus({search})
        expect(status).toBe('idle')
    })
})