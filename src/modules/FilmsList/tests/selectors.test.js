import filmsSelectors from '../selectors/selectors';

const films = {
    films: [
        {id:'1',title:'Batman', vote_average:4},
        {id:'2',title:'IronMan', vote_average:5},
        {id:'3',title:'IronMan2', vote_average:4.5},
    ],
    status:'idle',
    error:null,
    selected:'Batman',
}

describe('FilmsList selectors tests',()=> {
    it('goal: select films section',()=> {

        const result = filmsSelectors.getState({films})
        expect(result).toEqual(films)
    })

    it('goal: select films',()=> {

        const result = filmsSelectors.getAll({films})
        expect(result).toHaveLength(3)
        expect(result[0].title).toBe('Batman')
    })

    it('goal: select status',()=> {

        const result = filmsSelectors.getStatus({films})
        expect(result).toBe('idle')
    })

    it('goal: select error',()=> {

        const result = filmsSelectors.getError({films})
        expect(result).toBeNull()
    })

    it('goal: select film',()=> {

        const result = filmsSelectors.getSelected({films})
        expect(result).toBe('Batman')
    })

    it('goal: select sorted by rate films',() => {

        const result = filmsSelectors.getSortedByRate()({films})
        expect(result[0].title).toBe('IronMan')
        expect(result[1].title).toBe('IronMan2')
    })
})