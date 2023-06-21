import {
    getFilmsState,
    getAllFilms,
    getFilmsError,
    getFilmsStatus,
} from '../selectors/selectors';

const films = {
    films: [
        {id:'1',title:'Batman'}
    ],
    status:'idle',
    error:null,
}

describe('FilmsList selectors tests',()=> {
    it('goal: select films section',()=> {

        const result = getFilmsState({films})
        expect(result).toEqual(films)
    })

    it('goal: select films',()=> {

        const result = getAllFilms({films})
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Batman')
    })

    it('goal: select status',()=> {

        const result = getFilmsStatus({films})
        expect(result).toBe('idle')
    })

    it('goal: select error',()=> {

        const result = getFilmsError({films})
        expect(result).toBeNull()
    })
})