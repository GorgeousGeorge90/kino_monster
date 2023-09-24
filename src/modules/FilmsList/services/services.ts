
class FilmsServices {
    private baseUrl = 'https://movies-app1.p.rapidapi.com/api/movies';
    private options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0f258d306mshadb36a50b059aa4p133a42jsn54641b42874c',
        }
    }

    async getFreshFilms() {
        const response = await fetch(this.baseUrl,this.options)
        return response.json()
    }
}

export default new FilmsServices()