import filmsApi from "../api/api";


describe('filmsApi tests',()=> {
    it('goal: fetch films',async ()=> {

        const result = await filmsApi.getFilms()
        expect(result.results.length).toBeGreaterThanOrEqual(1)
    })
})