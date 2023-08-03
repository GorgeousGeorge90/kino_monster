import filmsApi from "../api/api";

jest.mock('axios')

describe('filmsApi tests',()=> {
    it('goal: fetch films',async ()=> {

        const result = await filmsApi.getFilms()
        expect(result.results.length).toBeGreaterThanOrEqual(1)
    })

    it('goalL get new films', async ()=> {

        const result = await filmsApi.getFreshFilms()
        expect(result.results).toHaveLength(24)
    })
})