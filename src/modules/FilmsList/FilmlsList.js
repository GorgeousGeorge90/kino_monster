import filmsApi from "./api/api";


const FilmsList = () => {

    const onClick = async () => {
        const response = await filmsApi.getFilms()
        console.log(response)
    }

    return (<div>
        <button onClick={onClick}>Get</button>

    </div>)
}

export default FilmsList