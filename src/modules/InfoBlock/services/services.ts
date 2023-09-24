
class InfoServices {

    async getText() {
        const id = Math.floor(Math.random()*10)
        const response = await fetch(`https://dummyjson.com/quotes/${id}`)
        return response.json()
    }
}

export default new InfoServices()