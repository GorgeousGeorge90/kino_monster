import FilmsServices from "../services/services";


jest.mock('axios')

describe('FilmsServices tests',()=> {
    it('goal: fetch films',async ()=> {

        jest.setTimeout(15000)
        const result = await FilmsServices.getFreshFilms()
        expect(result.results.length).toBeGreaterThanOrEqual(1)
    })
})