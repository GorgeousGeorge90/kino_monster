import {fetchFilms} from "../store/filmsSlice";

global.fetch = jest.fn()

describe('async fetchFilms tests',()=> {
    it('goal: successful fetchFilms', async ()=> {
        const data = {
            results: [
                {id:'1', title:'Batman'},
                {id:'2', title:'IronMan'},
            ]
        }

        fetch.mockResolvedValue({
            json: () => Promise.resolve(data)
        })

        const dispatch = jest.fn()
        const thunk = fetchFilms()

        await thunk(dispatch)

        const {calls} = dispatch.mock
        expect(calls).toHaveLength(2)

        const [start,end] = calls
        expect(start[0].type).toBe(fetchFilms.pending.type)
        expect(end[0].type).toBe(fetchFilms.fulfilled.type)
        expect(end[0].payload[0].title).toBe('Batman')
    })

    it('goal: unsuccessful fetchFilms',async ()=> {

        const error = {
            message:'Critical error!',
        }

        fetch.mockResolvedValue({
            json:()=>Promise.reject(error)
        })

        const dispatch = jest.fn()
        const thunk = fetchFilms()

        await thunk(dispatch)
        const {calls} = dispatch.mock
        expect(calls).toHaveLength(2)
        console.log(calls)

        const [start,end] = calls
        expect(start[0].type).toBe(fetchFilms.pending.type)
        expect(end[0].type).toBe(fetchFilms.rejected.type)
        expect(end[0].payload).toBe('Critical error!')
    })
})