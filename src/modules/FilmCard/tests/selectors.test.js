import {
    getSearch
} from '../selectors/selectors';

const search = {
    film:null,
    status: 'idle',
    error: null,
}

describe('FilmsSearch selectors',()=> {
    it('goal:receive film:null, status:idle, error:null', () => {

        const {film,status,error} = getSearch({search})
        expect(film).toBeNull()
        expect(status).toBe('idle')
        expect(error).toBeNull()
    })
})