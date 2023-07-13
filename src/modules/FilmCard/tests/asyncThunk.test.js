import {
    fetchFilm,
} from '../store/searchSlice';

global.fetch = jest.fn()

describe('test fetchFilm cases',()=> {
    it('goal: successful fetchFilm case', async ()=> {

        fetch.mockResolvedValue({
            json:()=>Promise.resolve({
                director: 'Nolan',
                actor: 'Bale',
            })
        })

        const payload = {
            title:'Batman',
            year:2005,
        }

        const dispatch = jest.fn()
        const thunk = fetchFilm(payload)

        await thunk(dispatch)
        const {calls} = dispatch.mock
        const [start,end] = calls
        expect(start[0].type).toBe(fetchFilm.pending.type)
        expect(end[0].type).toBe(fetchFilm.fulfilled.type)
        expect(end[0].payload.actor).toBe('Bale')
        expect(end[0].payload.director).toBe('Nolan')
    })

    it('goal: unsuccessful fetchFilm case', async ()=> {

        const error = {
            message:'Critical error!',
        }

        fetch.mockResolvedValue({
            json:()=>Promise.reject(error)
        })

        const payload = {
            title:'Batman',
            year:2005,
        }

        const dispatch = jest.fn()
        const thunk = fetchFilm(payload)

        await thunk(dispatch)
        const {calls} = dispatch.mock
        const [start,end] = calls
        expect(start[0].type).toBe(fetchFilm.pending.type)
        expect(end[0].type).toBe(fetchFilm.rejected.type)
        expect(end[0].payload).toBe('Critical error!')
    })
})
