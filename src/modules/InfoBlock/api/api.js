
const infoApi = {
    getText: () => {
        const id = Math.floor(Math.random()*10)
        return fetch(`https://dummyjson.com/quotes/${id}`)
            .then(response => response.json())
    }
}

export default infoApi