




const favFilmApi = {
    addFilm(title,year) {
        const data = fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=77b448a0`)
            .then(response => response.json())

        return data
    }
}

export default favFilmApi