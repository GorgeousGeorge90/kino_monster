import {
    getPhrase,
    getLoading,
    getPhError,
} from '../selectors/selectors';
import { RootState } from '../../../store/store';
import { PhraseType } from '../types/types';



const info:PhraseType = {
    phrase: null,
    status: 'pending',
    error: 'Critical!',
}

describe('infoBlock selectors tests',()=> {
    it('goal: get phrase',()=> {

        const phrase = getPhrase({info} as RootState)
        expect(phrase).toBe(null)
    })

    it('goal: get status',()=> {

        const status = getLoading({info} as RootState)
        expect(status).toBe('pending')
    })

    it('goal: get error with value Critical!',() => {

        const error = getPhError({info} as RootState)
        expect(error).toBe('Critical!')
    })
})