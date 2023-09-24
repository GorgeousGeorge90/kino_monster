
class NewsServices {
    private baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Movies&api-key=ITUL0bbtGf4RQKbazLWCj8NxKvAsd7Os'

    async fetchNews() {
        const response = await fetch(this.baseUrl)
        return response.json()
    }
}

export default new NewsServices()