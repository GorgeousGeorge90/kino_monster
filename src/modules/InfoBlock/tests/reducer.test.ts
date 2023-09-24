import infoReducer, {
    fetchPhrase
} from '../store/infoSlice';
import {PhraseType} from "../types/types";


const initialState:PhraseType = {
    phrase: null,
    status: 'idle',
    error: null,
}

describe('infoReducer tests',()=> {
    it('goal: get default initialState',()=>{

        const result = infoReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal:change status to pending',()=> {

        const result = infoReducer(initialState,({type:fetchPhrase.pending.type}))
        expect(result.status).toBe('pending')
    })

    it('goal: change status to fulfilled and get phrase',()=> {

        const action = {
            type:fetchPhrase.fulfilled.type,
            payload: {
                quote:'hi!',
                author:'me',
            }
    }

        const result = infoReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.phrase?.quote).toBe('hi!')
    })

    it('goal: change status to rejected and get error',()=> {

        const action = {
            type:fetchPhrase.rejected.type,
            payload:'Error!',
        }

        const result = infoReducer(initialState,action)
        expect(result.status).toBe('rejected')
        expect(result.error).toBe('Error!')
    })
})