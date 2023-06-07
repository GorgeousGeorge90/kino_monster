
const baseUrl =  'https://api.themoviedb.org/3/movie/popular?api_key=bd3e8033318000fc97ee3efcc6c6af83';

const filmsApi = {
    getFilms() {
        const data = fetch('https://api.themoviedb.org/3/movie/popular?api_key=bd3e8033318000fc97ee3efcc6c6af83')
            .then(response => response.json())

        return data
    },
}

export default filmsApi