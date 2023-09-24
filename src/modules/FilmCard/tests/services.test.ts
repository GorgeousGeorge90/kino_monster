import FilmCardServices from '../services/services';



describe('test favFilmApi',()=>{
    it('goal: addFilm by title,year',async ()=>{

        const result = await FilmCardServices.addFilm('Batman','2005')
        expect(result.Director).toBe('Christopher Nolan')
    })
})