import axios from "axios";

const instance = axios.create({
    baseURL:'https://dummyjson.com/quotes/1'
})



const infoApi = {
    getText: () => instance.get()
}

export default infoApi