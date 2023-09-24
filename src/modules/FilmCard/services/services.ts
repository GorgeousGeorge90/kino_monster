


class FilmCardServices {
    async addFilm(title:string,year:string) {
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=77b448a0`)
        return response.json()
    }
}

export default new FilmCardServices()