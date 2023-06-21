import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://movies-api6.p.rapidapi.com/movies/cnn',
    headers: {
        'X-RapidAPI-Key': 'b0f258d306mshadb36a50b059aa4p133a42jsn54641b42874c',
        'X-RapidAPI-Host': 'movies-api6.p.rapidapi.com'
    }
};

const newsApi = {
    getNews: async () => {
        const response = await axios.request(options)
        return response.data
    }

}

export default newsApi