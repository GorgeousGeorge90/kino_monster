import favFilmApi from '../api/api';



describe('test favFilmApi',()=>{
    it('goal: addFilm by title,year',async ()=>{

        const result = await favFilmApi.addFilm('Batman',2005)
        expect(result.Director).toBe('Christopher Nolan')
    })

    it('goal: getFilm by id', async ()=> {

        const result = await favFilmApi.getFilm('tt0372784')
        expect(result.Title).toBe('Batman Begins')
    })
})