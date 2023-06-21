import {
    getPhrase,
    getLoading,
} from '../selectors/selectors';



const info = {
    phrase: null,
    status: 'idle',
    error: null,
}

describe('infoBlock selectors tests',()=> {
    it('goal: get phrase',()=> {

        const phrase = getPhrase({info})
        expect(phrase).toBe(null)
    })

    it('goal: get status',()=> {

        const status = getLoading({info})
        expect(status).toBe('idle')
    })
})