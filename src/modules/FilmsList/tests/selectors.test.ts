import {
    getState,
    getAll,
    getError,
    getStatus,
    getSelected
} from '../selectors/selectors';
import { FilmsStateType } from '../types/types';
import { RootState } from '../../../store/store';

const films:FilmsStateType = {
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

describe('FilmsList selectors tests',()=> {
    it('goal: select films section',()=> {

        const result = getState({films} as RootState)
        expect(result).toEqual(films)
    })

    it('goal: select films with length 1 and _id 1 as first item',()=> {

        const result = getAll({films} as RootState)
        expect(result).toHaveLength(1)
        expect(result[0]._id).toBe('1')
    })

    it('goal: select status with pending value',()=> {

        const result = getStatus({films} as RootState)
        expect(result).toBe('pending')
    })

    it('goal: select error with Error!',()=> {

        const result = getError({films} as RootState)
        expect(result).toBe('Error!')
    })

    it('goal: select film with null',()=> {

        const result = getSelected({films} as RootState)
        expect(result).toBeNull()
    })
})