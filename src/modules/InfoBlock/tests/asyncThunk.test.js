import {
    fetchPhrase,
} from '../store/infoSlice';

global.fetch = jest.fn()

describe('fetchPhrase tests',()=>{
    it('goal: successful case', async ()=> {

        const phrase = {
            text:'Nice to meet you!',
            author:'Me',
        }

        fetch.mockResolvedValue({
            json:()=>Promise.resolve(phrase)
        })

        const dispatch = jest.fn()
        const thunk = fetchPhrase()

        await thunk(dispatch)
        const {calls} = dispatch.mock
        const [start,end] = calls

        expect(start[0].type).toBe(fetchPhrase.pending.type)
        expect(end[0].type).toBe(fetchPhrase.fulfilled.type)
        expect(end[0].payload.text).toBe('Nice to meet you!')
        expect(end[0].payload.author).toBe('Me')
    })

    it('goal: unsuccessful case', async ()=> {

        const error = {
            message:'Bad request',
        }

        fetch.mockResolvedValue({
            json:()=>Promise.reject(error)
        })

        const dispatch = jest.fn()
        const thunk = fetchPhrase()

        await thunk(dispatch)
        const {calls} = dispatch.mock
        const [start,end] = calls

        expect(start[0].type).toBe(fetchPhrase.pending.type)
        expect(end[0].type).toBe(fetchPhrase.rejected.type)
        expect(end[0].payload).toBe('Bad request')
    })
})




