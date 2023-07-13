


const favFilmApi = {
    addFilm(title,year) {
        return fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=77b448a0`)
            .then(response => response.json())
    },
    getFilm(id) {
        return fetch(`https://www.omdbapi.com/?i=${id}&apikey=77b448a0`)
            .then(response => response.json())

    }
}

export default favFilmApi