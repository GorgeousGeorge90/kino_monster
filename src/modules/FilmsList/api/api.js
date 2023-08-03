const baseUrl =  'https://api.themoviedb.org/3/movie/popular?api_key=bd3e8033318000fc97ee3efcc6c6af83';
const url1 = 'https://movies-app1.p.rapidapi.com/api/movies';
const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0f258d306mshadb36a50b059aa4p133a42jsn54641b42874c',
    }
}

const filmsApi = {
    getFilms() {
        return fetch('https://api.themoviedb.org/3/movie/popular?api_key=bd3e8033318000fc97ee3efcc6c6af83')
            .then(response => response.json())
    },
    getFreshFilms: () => {
        return fetch(url1,options1)
                    .then(response => response.json())
    }
}

export default filmsApi