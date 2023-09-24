import {
    getSearchFilm,
    getSearchStatus,
    getSearchError
} from '../selectors/selectors';
import { SearchTypes } from '../types/types';
import { RootState } from '../../../store/store';

const search:SearchTypes = {
    film:null,
    status:'pending',
    error: 'Error!',
}

describe('FilmsSearch selectors',()=> {
    it('goal:get film with null value', () => {

        const film = getSearchFilm({search} as RootState)
        expect(film).toBeNull()
    })

    it('goal:get status with pending value', () => {

        const status = getSearchStatus({search} as RootState)
        expect(status).toBe('pending')
    })

    it('goal:get error with Error! value', ()=> {

        const error = getSearchError({search} as RootState)
        expect(error).toBe('Error!')
    })
})