import FilmDescription from "../../modules/FilmDescription/FilmDescription";
import Comments from "../../modules/Comments/Comments";
import {useSelector} from "react-redux";
import filmsSelectors from "../../modules/FilmsList/selectors/selectors";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";


const CurrentFilmPage = () => {
    const navigate = useNavigate();
    const film = useSelector(filmsSelectors.getSelected)

    useEffect(()=> {
        if (film === null) {
            navigate('/')
        }
    },[])

    return (<div className={'grid grid-cols-2 justify-center my-auto gap-10 py-2 mx-24 my-5'}>
            <FilmDescription {...film}/>
            <Comments/>
        </div>)
}

export default CurrentFilmPage